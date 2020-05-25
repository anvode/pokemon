
import * as React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './PokemonDetail.scss';
import Title from '../Title/Title';

export interface PokemonDetailProps {}

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
    const {id} = useParams();

    useEffect(() => {
    }, []);
    
    return <>
        <Title name={`Pokemon Detail ${id}`}></Title>
    </>;
};

export default PokemonDetail;