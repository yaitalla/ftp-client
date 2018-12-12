import { combineReducers } from 'redux';
import player from './player';
import computer from './computer';
import score from './score';
import todos from './todo'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  computer,
  player,
  score,
  todos,
  visibilityFilter
});

export default rootReducer;
