import React from 'react';

import MyContext from '../contextAPI';

import Lista from '../components/Lista';
import ButtonAdd from '../components/BtnAdd';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      lista: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.contextValue = this.contextValue.bind(this);
    this.onClickAddList = this.onClickAddList.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onClickAddList() {
    const { texto } = this.state;
    this.setState((state) => ({ ...state, lista: [...state.lista, texto] }));
  }

  resetInput() {
    this.setState({ texto: '' });
  }

  contextValue() {
    return {
      ...this.state,
      handleChange: this.handleChange,
      onClickAddList: this.onClickAddList,
      resetInput: this.resetInput,
    };
  }

  render() {
    const { texto } = this.state;
    return (
      <MyContext.Provider value={ this.contextValue() }>
        <input name="texto" onChange={ this.handleChange } value={ texto } type="text" />
        <ButtonAdd />
        <Lista />
      </MyContext.Provider>
    );
  }
}
