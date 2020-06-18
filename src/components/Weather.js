import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {
  const kelvin = 273.15;
  const {name, main} = result;

  if(!name) return null;

  return(
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The weather in {name} is:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>Maximun temp:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>Minimun temp:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p><span>Humidity: {main.humidity}%</span></p>
      </div>
    </div>
  );
}

Weather.propTypes = {
  result: PropTypes.object.isRequired
}

export default Weather;
