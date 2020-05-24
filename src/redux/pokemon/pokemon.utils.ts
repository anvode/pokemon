import { Dispatch } from 'redux';
import { setPokemonAction, setPokemonFetchErrorAction, setPokemonFetchLoadingAction } from './pokemon.actions';

export const fetchPokemon = (offset: number, limit: number) => {

    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(setPokemonFetchLoadingAction(true));

        try {
            const response = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}?offset=${offset}&limit=${limit}`);
            const {results: pokemonList, next, previous, count} = await response.json();
            dispatch(setPokemonAction(pokemonList, next, previous, offset, limit, count));
            dispatch(setPokemonFetchLoadingAction(false));
    
        } catch (err) {
            dispatch(setPokemonFetchLoadingAction(false));
            dispatch(setPokemonFetchErrorAction(err.message));
        }
    };
};

