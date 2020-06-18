import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({search, saveSearch, saveRequest}) =>{


  const [error, saveError] = useState(false);

  const {city, country} = search;

  const handleChange = e =>{
    saveSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();

    if(city.trim() === '' || country.trim() === ''){
      saveError(true);
      return;
    }
    saveError(false);
    saveRequest(true);
  }
  const message = "All fields are required";
  return(
    <form
      onSubmit={handleSubmit}
    >
      {error ? <Error message={message} /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select a country --</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
}

Form.propTypes = {
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveRequest: PropTypes.func.isRequired
}

export default Form;
