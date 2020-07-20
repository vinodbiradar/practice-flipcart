import _ from 'lodash';
import {
  SET_SETTINGS,
  SET_INITIAL_SETTINGS,
  SET_DEFAULT_SETTINGS,
  RESET_DEFAULT_SETTINGS
} from 'app/store/types';

const initialState = {};

const settings = function(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_SETTINGS: {
      return _.merge({}, initialState);
    }

    case RESET_DEFAULT_SETTINGS: {
    }
    default: {
      return state;
    }
  }
};
export default settings;
