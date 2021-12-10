import { createStore, combineReducers, applyMiddleware } from 'redux';
import virtualReducer from '../pages/virtual/redux/virtualReducer';
import serverReducer from '../pages/server/redux/serverReducer';
import thunk from './reduxThunk.js';

const states = {
  virtual: virtualReducer,
  server: serverReducer,
}

const Reducer = combineReducers(states);

export default applyMiddleware(thunk)(createStore)(Reducer)