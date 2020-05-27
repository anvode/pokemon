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

export const getPaginationOffset = (search: string, limit: number, offset: number, pokemonList: number) => {
    const query = new URLSearchParams(search);
    const currentPage = query.get('page');
    const newOffset = currentPage ? limit * (+currentPage - 1) : 0;

    return {
        newOffset: pokemonList === 0 || newOffset !== offset ? newOffset : null
    };
};