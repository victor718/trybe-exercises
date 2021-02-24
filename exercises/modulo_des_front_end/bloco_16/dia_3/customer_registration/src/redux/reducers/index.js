import { combineReducers } from 'redux';

import authReducer from './authReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  authReducer,
  registerReducer,
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
