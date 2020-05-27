import * as React from 'react';
import { Move } from './types/PokemonDetail';
import { capitalize } from '../../Helpers';

export interface PokemonMovesProps {
    moves: Move[];
}
const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {

    return <>
        <div className="card-header border-0 rounded-0 text-white bg-primary mt-3">
            <h2 className="card-title h4 mb-0">Moves</h2>
        </div>
        <div className="mb-0 border border-top-0 p-3">
            {moves.map((move, index) => ( 
                <span className="alert d-inline-block alert-info mx-1 mb-2 p-2" key={move.name}>{capitalize(move.name)} </span>  
            ))}
        </div>
    </>; 
};

export default PokemonMoves;