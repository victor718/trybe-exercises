import React, { Component } from 'react';

class SelectState extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
    this.getFetchStates(this.sortState);
  }

  getFetchStates = async (callback) => {
    const URL =  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    try {
      const data = await fetch(URL);
      let items = await data.json();
      await callback(items);
    } catch(e) {
      this.setState({ error: e});
    }
  };
  
  sortState = (items) => {
    const results = items.map(iten => iten.sigla).sort().map((iten, index) => {
      return {
        id: index,
        sigla: iten,
      }
    });
    this.setState({ 
      isLoaded: true, 
      items: results.map(iten => {
        return {
          id: iten.id,
          sigla: iten.sigla
        } 
      }),
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const { handleChange, value } = this.props;
    if(error) {
      return <div>Error: { error.message }</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="field-states">
          <select required onChange={ handleChange } value={ value } name={ 'states' }>
            <option value="" disabled selected hidden>Estado</option>
            {items.map(item => (
              <option key={item.id} value={ item.sigla }>{ item.sigla }</option>
            ))}
          </select>
        </div>
      )
    }
  }
}

export default SelectState;