import React, { useState, useEffect } from 'react';

const App = () => {
  const [weatherInput, updateInput] = useState('');
  const [zip, updateZip] = useState('90224');
  const [temperature, updateTemperature] = useState();
  useEffect(
    () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=95554b619f027de1be782ba59006dc38`
      )
        .then(results => {
          console.log(results);
          return results.json();
        })
        .then(data => {
          updateTemperature(data.main.temp);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [zip]
  );
  return (
    <>
      <input
        placeholder="Enter Zip Code"
        type="text"
        value={weatherInput}
        onChange={e => {
          updateInput(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === 'Enter') updateZip(weatherInput);
        }}
      />
      <button
        onClick={() => {
          updateZip(weatherInput);
        }}
      >
        Get Temperature
      </button>
      {temperature && <h3>{temperature}</h3>}
    </>
  );
};

export default App;
