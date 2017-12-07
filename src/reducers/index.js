import { combineReducers } from 'redux';
import HeroesReducer from './reducer-heroes';
import SearchReducer from './reducer-search';

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  search: SearchReducer
});

export default rootReducer;
