import React from 'react';
import PropTypes from 'prop-types';
import FormLogin from '../../components/FormLogin/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    const { location } = this.props;
    const { msgAlert } = location;
    return (
      <main className="form-container">
        <FormLogin
          { ...{ email, password } }
          handleChange={ this.handleChange }
        />
        { msgAlert ? <h1>{msgAlert}</h1> : ''}
      </main>
    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    msgAlert: PropTypes.string,
  }),
};

Login.defaultProps = {
  location: {
    msgAlert: '',
  },
};

export default Login;
