import { LOGIN, isValidity } from '../actions/auth';

const initialState = {
  payload: {
    auth: true,
    user: {},
  },
};

function authReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      payload: {
        auth: isValidity(action.payload),
        user: action.payload.user },
    };
  default:
    return state;
  }
}

export default authReducer;
