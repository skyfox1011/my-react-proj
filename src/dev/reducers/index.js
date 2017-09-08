import {combineReducers} from 'redux';
import CharactersReducer from './characters';
import NewsReducer from './news';
import ActiveCharacterReducer from './active-character';
import MovesFilteredReducer from './filtered-moves';

const allReducers = combineReducers({
    characters: CharactersReducer,
    news: NewsReducer,
    activeCharacter: ActiveCharacterReducer,
    filteredMoves: MovesFilteredReducer
});

export default allReducers;