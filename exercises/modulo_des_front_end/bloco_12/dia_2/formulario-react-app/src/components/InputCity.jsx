import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCity extends Component{

  render() {
    const { 
            handleChange, handleBlurValidCity, isValid,
            maxLength, minLength, name,
            required, type, value 
          } = this.props;
          
    return (
      <div>
        <input
          maxLength={ maxLength }
          minLength={ minLength }
          name={ name }
          onChange={ handleChange }
          onBlur={ handleBlurValidCity } 
          required={ required ? required : false}
          type={ type }
          value={ value }
        />
        <span className="form-error">{isValid ? '':'Campo inválido!'}</span>
      </div>
    );
  }
}

InputCity.propTypes = {
  handleChange: PropTypes.func.isRequired,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
}

InputCity.defaultProps = {
  isValid: true,
  maxLength: '20',
  required: true,
  type: 'text',
  minLength: '10',
}

export default InputCity;