import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {handleChange, isValid, maxLength, minLength, name, required, type, value} = this.props;
    // console.log(handleChange)
    return (
      <div>
        <input
          maxLength={ maxLength }
          minLength={ minLength }
          name={ name }
          onChange={ handleChange } 
          required={ required ? required : false}
          type={ type }
          value={ value }
        />
        <span className="form-error">{isValid ? '':'Campo inválido!'}</span>
      </div>
    );
  }
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  isValid: true,
  maxLength: '20',
  required: true,
  type: 'text',
  minLength: '10',
}

export default Input;