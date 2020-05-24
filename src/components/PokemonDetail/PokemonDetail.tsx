
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setTitleAction } from '../../redux/pokemon/pokemon.actions';

import './PokemonDetail.scss';

export interface PokemonDetailProps {}

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitleAction(`Pokemon Detail ${id}`));
    }, []);
    return <>
    </>;
};

export default PokemonDetail;