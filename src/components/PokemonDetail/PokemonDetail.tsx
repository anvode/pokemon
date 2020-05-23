
import * as React from 'react';
import { useParams } from 'react-router-dom';

import './PokemonDetail.scss';

export interface PokemonDetailProps {}

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
    const {id} = useParams();

    return <>
        <h1 className="app__title">Pokemon Detail {id}</h1>
    </>;
};

export default PokemonDetail;