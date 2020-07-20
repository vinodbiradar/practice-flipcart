import { combineReducers } from 'redux';
import settings from './settings.reducer';
import navbar from './navbar.reducer';

const kingpinReducers = combineReducers({
  settings,
  navbar
});

export default kingpinReducers;
