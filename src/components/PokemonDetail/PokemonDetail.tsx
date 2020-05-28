
import * as React from 'react';
import { useEffect, useReducer } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PokemonDetailState } from './types/PokemonDetail';
import './PokemonDetail.scss';
import Title from '../Title/Title';
import { pokemonDetailReducer } from './pokemon.reducer';
import { fetchPokemon } from './pokemon.utils';
import Loader from '../Loader/Loader';
import { capitalize } from '../../Helpers';
import PokemonProperties from './PokemonProperties';
import PokemonImage from './PokemonImage';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import PokemonEvolutions from './PokemonEvolutions';
import NotFound from '../NotFound/NotFound';

export interface PokemonDetailProps {}

export const initialState: PokemonDetailState = {
    pokemonDetailLoading: false,
    pokemonDetailError: null,
    pokemonDetail: null,
    id: null
};

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
    const [state, dispatch] = useReducer(pokemonDetailReducer, initialState);
    const {id} = useParams();

    useEffect(() => {
        fetchPokemon(dispatch, id);

    }, [dispatch, id]);

    const {pokemonDetailLoading, pokemonDetailError, pokemonDetail} = state;
    
    if (pokemonDetailError) {
        return <>
            <NotFound></NotFound>
        </>;
    }

    if (pokemonDetailLoading || pokemonDetail === null) {
        return <Loader></Loader>;
    }
    
    const { name, sprites, order, abilities, types, moves, stats, species} = pokemonDetail;
    const currentPage = Math.ceil(id / 39);

    return <>
        <Title name={`#${id} ${capitalize(name)}`}></Title>
        <div className="row mt-1">
            <div className="col-md-4 mb-3">
                <PokemonImage name={name} url={sprites.front_default}></PokemonImage>
            </div>
            <div className="col-md-8 mb-3">
                <PokemonProperties name={name} order={order} abilities={abilities} types={types}></PokemonProperties>
            </div>
        </div>
        <PokemonStats stats={stats}></PokemonStats>
        <PokemonEvolutions species={species}></PokemonEvolutions>
        <PokemonMoves moves={moves}></PokemonMoves>
        <Link className="btn btn-primary mt-4" to={`/?page=${currentPage}`}>Back to Pokemon List</Link>
    </>;
};

export default PokemonDetail;