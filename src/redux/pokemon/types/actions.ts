import { PokemonItem } from './Pokemon';

export const POKEMON_FETCH = 'POKEMON_FETCH';
export const POKEMON_FETCH_LOADING = 'POKEMON_FETCH_LOADING';
export const POKEMON_FETCH_ERROR = 'POKEMON_FETCH_ERROR';
export const POKEMON_SET_TITLE = 'POKEMON_SET_TITLE';

export interface SetPokemonAction {
    type: typeof POKEMON_FETCH;
    payload: {
        pokemonList: PokemonItem[], 
        next: string | null, 
        previous: string | null, 
        offset: number, 
        limit: number,
        count: number
    };
}

export interface SetPokemonErrorAction {
    type: typeof POKEMON_FETCH_ERROR;
    payload: {
        error: boolean;
    }
}

export interface SetPokemonLoadingAction {
    type: typeof POKEMON_FETCH_LOADING;
    payload: {
        loading: boolean;
    }
}

export interface SetTitleAction {
    type: typeof POKEMON_SET_TITLE;
    payload: {
        title: string;
    }
}

export type PokemonActionTypes = SetPokemonAction | SetPokemonErrorAction | SetPokemonLoadingAction | SetTitleAction;
