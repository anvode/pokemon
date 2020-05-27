import { Pokemon } from './PokemonDetail';

export const POKEMON_DETAIL_LIST = 'POKEMON_DETAIL_LIST';
export const POKEMON_DETAIL_LOADING = 'POKEMON_DETAIL_LOADING';
export const POKEMON_DETAIL_ERROR = 'POKEMON_DETAIL_ERROR';

export interface SetPokemonDetailAction {
    type: typeof POKEMON_DETAIL_LIST;
    payload: {
        pokemonDetail: Pokemon;
        id: number;
    }
}

export interface SetPokemonDetailErrorAction {
    type: typeof POKEMON_DETAIL_ERROR;
    payload: {
        error: Error | null;
    }
}

export interface SetPokemonDetailLoadingAction {
    type: typeof POKEMON_DETAIL_LOADING;
    payload: {
        loading: boolean;
    }
}

export type PokemonDetailActionTypes = SetPokemonDetailErrorAction | SetPokemonDetailLoadingAction | SetPokemonDetailAction;
