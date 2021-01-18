import React, { Component } from 'react';
import Input from './Input';
import InputCity from './InputCity';
import Label from './Label';
import SelectState from './SelectState';
import RadioButton from './RadioButton';

import './Formulario.css'

class Formulario extends Component{
  constructor() {
    super();
    this.state = {
      name: '',
      isNameValid: true,
      email: '',
      isEmailValid: true,
      cpf: '',
      isCpfValid: true,
      address: '',
      isAddressValid: true,
      city: '',
      isCityValid: true,
      states: '',
      isStatesValid: true,
      residence: '',
      isResidenceValid: true,
    }
  }

  handleChange = (event, callback = undefined) => {
    const { target } = event;
    if(callback !== undefined) callback(target);
    else this.setState({ [target.name]: target.value });
  };

  handleChangeRadio = (event) => {
    const { target } = event;
    this.setState({ 'residence': target.value });
  }

  isValiditAddress = (target) => {
    const isValid = target.value.match(/[^a-zA-Z\wÀ-ú0-9\s]/g);
    if (isValid || target.value.length === 0) {
      this.setState({ 
        [target.name]: target.value,
        'isAddressValid': false, 
      });
    } else {
      this.setState({
        [target.name]: target.value,
        'isAddressValid': true, 
      });
    }
  };

  isValidCity = (target) => {
    const isValid = target.value.match(/^[0-9]/);
    if (isValid || target.value.length === 0) {
      this.setState({ 
        [target.name]: target.value,
        'isCityValid': false, 
      });
    } else {
      this.setState({
        [target.name]: target.value,
        'isCityValid': true, 
      });
    }
  }

  handleChangeValidAddress = (event) => {
    this.handleChange(event, this.isValiditAddress);
  };

  handleBlurValidCity = (event) => {
    this.handleChange(event, this.isValidCity);
  }

  render() {
    const { address, city, cpf, name, email, isAddressValid, isCityValid, residence, states} = this.state
    return (
      <form action="#" method="GET">
        <fieldset>
          <legend>Dados pessoais</legend>

          <div className="field-name">
            <Label nameField={ 'Nome:' } />
            <Input handleChange={ this.handleChange } maxLength={ '40' } name={ 'name' } value={ name } />
          </div>

          <div className="field-email">
            <Label nameField={ 'Email:' } />
            <Input handleChange={ this.handleChange } maxLength={ '50' } name={ 'email' } type={ 'email' } value={ email } />
          </div>

          <div className="field-cpf">
          <Label nameField={ 'CPF:' } />
            <Input handleChange={ this.handleChange } maxLength={ '11' } name={ 'cpf' } value={ cpf } />
          </div>

          <div className="field-endereco">
            <Label nameField={ 'Endereço:' }/>
            <Input handleChange={ this.handleChangeValidAddress } maxLength={ '200' } name={ 'address' }
              value={ address } isValid={ isAddressValid } 
            />
          </div>
          
          <div className="field-cidade">
            <Label nameField={ 'Cidade:' } />
            <InputCity handleChange={ this.handleChange } handleBlurValidCity={ this.handleBlurValidCity } 
              maxLength={ '28' } name= { 'city' } value={ city } isValid={ isCityValid }/>
          </div>

          <SelectState handleChange={ this.handleChange } value={ states }/>

          <RadioButton handleChangeRadio={ this.handleChangeRadio } value={ residence }/>
        </fieldset>
        <fieldset>
          <legend>Dados do seu último emprego</legend>
          <div className="field-lastJob">
            <Label nameField={ "Resumo do currículo:" } />
            <textarea rows="20" cols="82" maxLength="100" required />
          </div>
          <div className="field-cargo">
            <Label nameField={ "Cargo:" } />
            <textarea rows="10" cols="82" maxLength="40" required />
          </div>
          <div className="field-descJob">
            <Label nameField={ 'Descrição do cargo:' } />
            <Input handleChange={ this.handleChange } name={ "" } value={ "" }/>
          </div>
        </fieldset>
      </form>
    );
  };
}

export default Formulario;