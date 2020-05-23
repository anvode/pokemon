import * as React from 'react';

import './PokemonList.scss';

export interface PokemonListProps {}

const PokemonList: React.FC<PokemonListProps> = () => {
    
    return <>
        <h1 className="app__title">Pokemon List</h1>
    </>;
};

export default PokemonList;