import { PokemonDetailState } from './types/PokemonDetail';

import { POKEMON_DETAIL_LIST, POKEMON_DETAIL_LOADING, POKEMON_DETAIL_ERROR, PokemonDetailActionTypes } from './types/actions';

export const pokemonDetailReducer = (state: PokemonDetailState, action: PokemonDetailActionTypes): PokemonDetailState => {

    switch (action.type) {

        case POKEMON_DETAIL_LIST: {
            return {
                ...state,
                pokemonDetail: action.payload.pokemonDetail,
                id: action.payload.id
            };
        }

        case POKEMON_DETAIL_ERROR: {
            return {
                ...state,
                pokemonDetailError: action.payload.error
            };
        }

        case POKEMON_DETAIL_LOADING: {
            return {
                ...state,
                pokemonDetailLoading: action.payload.loading
            };
        }

        default:
            return state;
    }
};
