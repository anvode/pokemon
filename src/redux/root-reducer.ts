import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon/pokemon.reducer';

export const rootReducer = combineReducers({
    pokemon: pokemonReducer
});

export type RootState = ReturnType<typeof rootReducer>;
