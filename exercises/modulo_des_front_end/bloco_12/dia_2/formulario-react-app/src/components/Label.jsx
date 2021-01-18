import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: props.nameField,
    }
  }

  render() {
    const { nameField } = this.state;
    return (
      <label>{ nameField }</label>
    )
  }
}

Label.propTypes = {
  nameField: PropTypes.string.isRequired
}

export default Label;