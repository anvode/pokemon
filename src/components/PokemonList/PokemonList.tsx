import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { RootState } from '../../redux/root-reducer';
import { fetchPokemon, getPaginationOffset } from '../../redux/pokemon/pokemon.utils';
import PokemonItem from './PokemonItem';
import Title from '../Title/Title';

import './PokemonList.scss';
import Pagination from '../Pagination/Pagination';

export interface PokemonListProps {}

const PokemonList: React.FC<PokemonListProps> = () => {
    const { pokemonFetchLoading, pokemonFetchError, pokemonList, limit, offset} = useSelector((state: RootState) => state.pokemon);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const { newOffset } = getPaginationOffset(history.location.search, limit, offset, pokemonList.length);

        if (newOffset !== null) {
            dispatch(fetchPokemon(newOffset, limit));
        } 
        
    }, [history.location.search]);

    if (pokemonFetchError) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{pokemonFetchError}</strong>
        </div>;
    }

    if (pokemonFetchLoading) {
        return <Loader></Loader>;
    }

    return <>
        <Title name="Pokemon"></Title>
        <div className="row">
            {pokemonList.map((item) => (
                <PokemonItem key={item.name} name={item.name} url={item.url}></PokemonItem>
            ))}
         
        </div>
        <Pagination></Pagination>
    </>;
};

export default PokemonList;