import { combineReducers } from 'redux';
import player from './player';
import computer from './computer';
import score from './score';

const rootReducer = combineReducers({
  computer,
  player,
  score,
});

export default rootReducer;
