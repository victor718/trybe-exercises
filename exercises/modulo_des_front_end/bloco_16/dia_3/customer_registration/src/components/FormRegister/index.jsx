import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import register from '../../redux/actions/register';

class FormRegister extends React.Component {
  render() {
    const { email, name, age, handleChange, register: registerCl } = this.props;
    const { listClient } = this.props;
    const id = listClient.length + 1;
    const client = { id, name, age, email };
    return (
      <form action onSubmit={ (event) => event.preventDefault() }>
        <div>
          <h1>Cadastro de cliente</h1>
        </div>
        <div>
          <input
            onChange={ handleChange }
            value={ name }
            placeholder="Nome do cliente"
            name="name"
            className="input-text"
            type="text"
          />
        </div>
        <div>
          <input
            onChange={ handleChange }
            value={ age }
            placeholder="Idade do cliente"
            name="age"
            className="input-text"
            type="text"
          />
        </div>
        <div>
          <input
            onChange={ handleChange }
            value={ email }
            placeholder="E-mail do cliente"
            name="email"
            className="input-email"
            type="text"
          />
        </div>
        <div>
          <button onClick={ () => registerCl(client) } type="button">Salvar</button>
        </div>
      </form>
    );
  }
}

FormRegister.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  listClient: PropTypes.arrayOf(PropTypes.object),
};

FormRegister.defaultProps = {
  listClient: [],
};

const mapDispatchToProps = (dispatch) => ({
  register: (client) => dispatch(register(client)),
});

const mapStateToProps = (state) => ({
  listClient: state.registerReducer.client,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
