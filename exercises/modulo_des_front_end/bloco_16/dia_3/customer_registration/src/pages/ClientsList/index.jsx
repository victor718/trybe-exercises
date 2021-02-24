import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButttonNav from '../../components/NavigationButton';
import TableClient from '../../components/TableClient';

class ClientList extends React.Component {
  render() {
    const { listClient } = this.props;

    return (
      <div>
        {listClient.length
          ? <TableClient { ...{ listClient } } />
          : <h1>Nenhum cliente cadastrado</h1>}
        <Link to="/cadastrar">
          <button type="button">Cadastrar</button>
        </Link>
        <ButttonNav namePage="HOME" path="/" nameButton="btn-go-home" />
      </div>
    );
  }
}

ClientList.propTypes = {
  listClient: PropTypes.arrayOf(PropTypes.object),
};

ClientList.defaultProps = {
  listClient: [],
};

const mapStateToProps = (state) => ({
  listClient: state.registerReducer.client,
});

export default connect(mapStateToProps, null)(ClientList);
