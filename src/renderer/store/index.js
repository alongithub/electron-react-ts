import { createStore, combineReducers, applyMiddleware } from 'redux';
import virtualReducer from '../pages/redux/virtualReducer.js';
import thunk from './reduxThunk.js';

const states = {
  virtual: virtualReducer,
}

const Reducer = combineReducers(states);

export default applyMiddleware(thunk)(createStore)(Reducer)