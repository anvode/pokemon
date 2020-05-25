import { PokemonState } from './types/Pokemon';
import { POKEMON_FETCH, POKEMON_FETCH_LOADING, POKEMON_FETCH_ERROR, PokemonActionTypes } from './types/actions';

export const initialState: PokemonState = {
    pokemonFetchLoading: false,
    pokemonFetchError: false,
    pokemonList: [],
    next: null,
    previous: null,
    offset: 0,
    limit: 50,
    count: 0
};

export const pokemonReducer = (state: PokemonState = initialState, action: PokemonActionTypes): PokemonState => {

    switch (action.type) {

        case POKEMON_FETCH: {
            return {
                ...state,
                pokemonList: action.payload.pokemonList,
                next: action.payload.next,
                previous: action.payload.previous,
                offset: action.payload.offset,
                limit: action.payload.limit,
                count: action.payload.count
            };
        }

        case POKEMON_FETCH_LOADING: {
            return {
                ...state,
                pokemonFetchLoading: action.payload.loading
            };
        }

        case POKEMON_FETCH_ERROR: {
            return {
                ...state,
                pokemonFetchError: action.payload.error
            };
        }

        default:
            return state;
    }
};
