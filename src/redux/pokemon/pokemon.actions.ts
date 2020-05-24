import { PokemonItem } from './types/Pokemon';
import { POKEMON_FETCH, POKEMON_FETCH_LOADING, POKEMON_FETCH_ERROR, POKEMON_SET_TITLE, PokemonActionTypes } from './types/actions';

export const setPokemonAction = (pokemonList: PokemonItem[], next: string | null, previous: string | null, offset: number, limit: number, count: number): PokemonActionTypes => {
    return {
        type: POKEMON_FETCH,
        payload: {
            pokemonList,
            next,
            previous,
            offset,
            limit, 
            count
        }
    };
};

export const setPokemonFetchErrorAction = (error: boolean): PokemonActionTypes => {
    return {
        type: POKEMON_FETCH_ERROR,
        payload: {
            error: error
        }
    };
};

export const setPokemonFetchLoadingAction = (loading: boolean): PokemonActionTypes => {
    return {
        type: POKEMON_FETCH_LOADING,
        payload: {
            loading: loading 
        }

    };
};

export const setTitleAction = (title: string): PokemonActionTypes => {
    return {
        type: POKEMON_SET_TITLE,
        payload: {
            title: title 
        }

    };
};

