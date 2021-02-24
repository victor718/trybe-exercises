import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import auth from '../../redux/actions/auth';

class FormLogin extends React.Component {
  render() {
    const { email, password, handleChange } = this.props;
    const { auth: authF } = this.props;
    const user = { email, password };
    return (
      <form
        onSubmit={ (event) => event.preventDefault() }
        action=""
        className="form-content"
      >
        <div>
          <h1>Login</h1>
        </div>

        <div>
          <input
            onChange={ handleChange }
            value={ email }
            name="email"
            required
            type="email"
            className="input-email"
          />
        </div>

        <div>
          <input
            onChange={ handleChange }
            value={ password }
            name="password"
            required
            type="password"
            className="input-password"
          />
        </div>
        <div>
          <Link to="/register-clients">
            <button
              onClick={ () => authF(user) }
              className="btn-enter-login"
              type="button"
            >
              Entrar
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (user) => dispatch(auth(user)),
});

FormLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormLogin);
