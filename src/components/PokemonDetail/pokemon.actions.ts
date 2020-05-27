import { Pokemon } from './types/PokemonDetail';

import { POKEMON_DETAIL_LIST, POKEMON_DETAIL_LOADING, POKEMON_DETAIL_ERROR, PokemonDetailActionTypes } from './types/actions';

export const SetPokemonDetailAction = (pokemonDetail: Pokemon, id: number): PokemonDetailActionTypes => {
    return {
        type: POKEMON_DETAIL_LIST,
        payload: {
            pokemonDetail,
            id
        }
    };
};

export const setPokemonDetailErrorAction = (error: Error | null): PokemonDetailActionTypes => {
    return {
        type: POKEMON_DETAIL_ERROR,
        payload: {
            error
        }
    };
};

export const setPokemonDetailLoadingAction = (loading: boolean): PokemonDetailActionTypes => {
    return {
        type: POKEMON_DETAIL_LOADING,
        payload: {
            loading
        }
    };
};
