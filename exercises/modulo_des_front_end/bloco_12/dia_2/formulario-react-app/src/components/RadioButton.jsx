import React, { Component } from 'react';
import Label from './Label';

class RadioButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      casa: false,
      apartamento: true,
    }
  } 
  handleClick = (event) => {
    const { target } = event;
    if(target.value === 'casa') {
      this.setState({ [target.value]: true })
      this.setState({ 'apartamento': false })
    }

    if(target.value === 'apartamento') {
      this.setState({ [target.value]: true })
      this.setState({ 'casa': false })
    }
  }

  render() {
    const { handleChangeRadio } = this.props;
    return (
      <div className="field-residence">
        <div className="field-house">
          <Label nameField={ 'Casa' } />
          <input type="radio" id="casa" value="casa"
            name="residence" checked={this.state.casa } onClick={ this.handleClick } onChange={ handleChangeRadio }/>
        </div>
        <div className="field-apartament">
          <Label nameField={ 'Apartamento' } />
          <input type="radio" id="apartamento" value="apartamento"
            name="residence" checked={this.state.apartamento} onClick={ this.handleClick } onChange={ handleChangeRadio }/>
        </div>
      </div>  
    )
  }
}

export default RadioButton;