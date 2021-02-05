import React from 'react';
import ValidEmail from './ValidEmail';

class Exemplo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickEnviar = this.onClickEnviar.bind(this);
    this.onClickVoltar = this.onClickVoltar.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onClickEnviar() {
    this.setState((state) => (
      {
        saveEmail: state.email,
        email: '',
      }
    ));
  }

  onClickVoltar() {
    this.setState((state) => (
      {
        email: state.saveEmail,
        saveEmail: '',
      }
    ));
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            name="email"
            onChange={ this.handleChange }
            value={ email }
            type="email"
          />
        </label>
        <button
          data-testid="id-send"
          id="btn-enviar"
          onClick={ this.onClickEnviar }
          type="button"
          value="Enviar"
        >
          Enviar
        </button>
        <button
          id="btn-voltar"
          value="Voltar"
          onClick={ this.onClickVoltar }
          type="button"
        >
          Voltar
        </button>
        <div>
          {/* <span data-testid="id-email-user">{`Valor: ${saveEmail}`}</span> */}
          <ValidEmail email={ saveEmail } />
        </div>
      </div>
    );
  }
}

export default Exemplo1;
