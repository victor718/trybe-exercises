import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render() {
    const { isAuthentication, render: Component, msgAlert, ...rest } = this.props;
    return (
      <Route
        { ...rest }
        render={ (props) => (
          isAuthentication ? (
            <Component { ...props } />
          ) : (
            <Redirect
              to={ {
                pathname: '/login',
                state: { from: props.location },
                msgAlert,
              } }
            />
          )
        ) }
      />
    );
  }
}

const mapStateToProps = ({ authReducer: { payload } }) => ({
  isAuthentication: payload.auth,
});

PrivateRoute.propTypes = {
  isAuthentication: PropTypes.bool.isRequired,
  render: PropTypes.objectOf(PropTypes.shape()).isRequired,
  msgAlert: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(PrivateRoute);
