import { combineReducers } from 'redux';
import geeky from './geeky';

const createReducer = (asyncReducers) =>
  combineReducers({
    geeky,
    ...asyncReducers,
  });

export default createReducer;
