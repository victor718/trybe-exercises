import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">
          <button className="btn-login-home" type="button">Login</button>
        </Link>
      </div>
    );
  }
}

export default Home;
