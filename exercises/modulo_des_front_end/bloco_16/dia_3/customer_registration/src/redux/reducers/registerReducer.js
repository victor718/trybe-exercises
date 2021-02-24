import { REGISTER } from '../actions/register';
import { DELETE, isDeleteItem } from '../actions/deleteClient';

const initialState = {
  client: [],
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case REGISTER:
    return {
      ...state,
      client: state.client.concat(action.payload.client),
    };
  case DELETE:
    return {
      client: isDeleteItem(state, action.payload),
    };
  default:
    return state;
  }
}

export default registerReducer;
