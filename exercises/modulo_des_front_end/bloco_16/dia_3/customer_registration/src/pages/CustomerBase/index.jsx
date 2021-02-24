import React from 'react';
import FormRegister from '../../components/FormRegister';
import NavButton from '../../components/NavigationButton';

class CustomerBase extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <main>
        <FormRegister
          { ...{ name, email, age } }
          handleChange={ this.handleChange }
        />
        <NavButton
          namePage="Voltar"
          path="/register-clients"
          nameButton="go-list-clients"
        />
      </main>
    );
  }
}

export default CustomerBase;
