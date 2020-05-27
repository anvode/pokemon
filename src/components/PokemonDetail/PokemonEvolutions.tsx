import * as React from 'react';
import Loader from '../Loader/Loader';
import { useFetchEvolutionChain } from './pokemon.utils';
import { capitalize } from '../../Helpers';

export interface PokemonEvolutionsProps {
    species: {
        name: string;
        url: string;
    };
}
const PokemonEvolutions: React.FC<PokemonEvolutionsProps> = ({ species }) => {
    const index = species.url.split('/')[species.url.split('/').length - 2];

    const {loading, error, chains} = useFetchEvolutionChain(+index);
    
    if (error) {
        return <div>
            Oops! An Error happens while Fetching:  <strong>{error}</strong>
        </div>;
    }

    if (loading) {
        return <Loader></Loader>;
    }
    
    return <>
        <div className="card-header border-0 rounded-0 text-white bg-primary mt-3">
            <h2 className="card-title h4 mb-0">Evolution Chain</h2>
        </div>
        <div className="d-flex mb-0 border border-top-0 p-3 flex-wrap">
            {chains && chains.map((chain, index) => {
                return <React.Fragment key={chain.species_name}>
                    {index !== 0 && (
                        <div className="pokemon-evolution d-flex justify-content-around flex-grow-1">
                            <div className="px-2 text-center">
                                {chain.min_level && <>
                                    <strong>Level</strong> <br/>
                                    {chain.min_level} <br/>
                                </>}
                                →
                            </div>
                        </div>
                        
                    )}
                    <div className="pokemon-evolution d-flex align-items-center justify-content-around flex-grow-1">
                        <div className="px-2 text-primary h4">
                            {capitalize(chain.species_name)}
                        </div>
                    </div>
                  
                </React.Fragment>;
            })}
        </div>
    </>; 
};

export default PokemonEvolutions;