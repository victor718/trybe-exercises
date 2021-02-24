import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TableClient.css';
import deleteClient from '../../redux/actions/deleteClient';

class TableClient extends React.Component {
  constructor() {
    super();
    this.state = {
      order: false,
    };
    this.orderList = this.orderList.bind(this);
    this.onClickOrderList = this.onClickOrderList.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickOrderList() {
    this.setState((state) => ({ order: !state.order }));
  }

  onClickDelete({ target }) {
    const { deleteClient: deleteCl } = this.props;
    const { dataset: { idclient } } = target;
    deleteCl(idclient);
  }

  orderList() {
    const { listClient } = this.props;
    const { order } = this.state;
    if (order) {
      const result = listClient.map((el) => el).sort((a, b) => (
        a.name.localeCompare(b.name)
      ));
      return result;
    }
    return listClient;
  }

  render() {
    return (
      <table className="table-client">
        <tr className="header-table">
          <th onClick={ () => this.onClickOrderList() } className="btn-order">
            Nome &#8595;
          </th>
          <th>Idade</th>
          <th>Email</th>
          <th>Excluir</th>
        </tr>
        { this.orderList().map((el, index) => (
          <tr className="row-container" key={ index }>
            <td className="column-table">{el.name}</td>
            <td className="column-table">{el.age}</td>
            <td className="column-table">{el.email}</td>
            <td className="column-table btn-delete-item-table">
              <button
                onClick={ this.onClickDelete }
                data-idclient={ el.id }
                type="button"
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

TableClient.propTypes = {
  listClient: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteClient: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteClient: (id) => dispatch(deleteClient(id)),
});

export default connect(null, mapDispatchToProps)(TableClient);
