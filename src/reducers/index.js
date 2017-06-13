import { combineReducers } from 'redux';
import EmperorsReducer from './reducer_emperors';
import ActiveEmperor from './reducer_active_emperor';
import Count from './reducer_count';

const rootReducer = combineReducers({
  emperors: EmperorsReducer,
  activeEmperor: ActiveEmperor,
  count: Count
});

export default rootReducer;
