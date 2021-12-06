import { createStore, combineReducers, applyMiddleware } from 'redux';
import virtualReducer from '../pages/redux/virtualReducer';
import serverReducer from '../pages/redux/serverReducer';
import thunk from './reduxThunk.js';

const states = {
  virtual: virtualReducer,
  server: serverReducer,
}

const Reducer = combineReducers(states);

export default applyMiddleware(thunk)(createStore)(Reducer)