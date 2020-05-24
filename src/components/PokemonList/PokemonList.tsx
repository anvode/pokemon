import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../Loader/Loader';
import { RootState } from '../../redux/root-reducer';
import { fetchPokemon } from '../../redux/pokemon/pokemon.utils';
import { setTitleAction } from '../../redux/pokemon/pokemon.actions';
import PokemonItem from './PokemonItem';

import './PokemonList.scss';

export interface PokemonListProps {}
const PokemonList: React.FC<PokemonListProps> = () => {
    const { pokemonFetchLoading, pokemonFetchError, pokemonList} = useSelector((state: RootState) => state.pokemon);
    const dispatch = useDispatch();
    
    useEffect(() => {
        pokemonList.length === 0 && dispatch(fetchPokemon(0, 30));
        dispatch(setTitleAction('Pokemon'));

    }, []);

    if (pokemonFetchError) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{pokemonFetchError}</strong>
        </div>;
    }

    if (pokemonFetchLoading) {
        return <Loader></Loader>;
    }

    return <>
        <div className="row">
            {pokemonList.map((item) => (
                <PokemonItem key={item.name} name={item.name} url={item.url}></PokemonItem>
            ))}
         
        </div>
    </>;
};

export default PokemonList;