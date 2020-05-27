import { useEffect, useState } from 'react';

import { PokemonDetailActionTypes } from './types/actions';
import { setPokemonDetailErrorAction, setPokemonDetailLoadingAction, SetPokemonDetailAction } from './pokemon.actions';
import { Move, Evolution } from './types/PokemonDetail';

export const fetchPokemon = async (dispatch: React.Dispatch<PokemonDetailActionTypes>, id: number) => {
 
    dispatch(setPokemonDetailLoadingAction(true));
    try {
        const response = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/${id}`);

        const {
            sprites, name, order, abilities, types, stats, species, moves: filterMoves
        } = await response.json();
       
        const moves: Move[] = filterMoves.map((item: {
            move: Move;
        }) => item.move);

        dispatch(setPokemonDetailLoadingAction(false));
        dispatch(SetPokemonDetailAction({sprites, name, order, abilities, types, stats, species, moves}, id));

    } catch (err) {
        dispatch(setPokemonDetailLoadingAction(false));
        dispatch(setPokemonDetailErrorAction(err));
    }
};

export const useFetchEvolutionChain = (id: number) => {
 
    const [chains, setChain] = useState<Evolution[] | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const responseSpecies = await fetch(`${process.env.REACT_APP_POKEMON_SPECIES_API_URL}/${id}`);
                const {evolution_chain} = await responseSpecies.json();

                const responseChain = await fetch(`${evolution_chain.url}`);
                const dataChain = await responseChain.json();   

                const getEvolutionChain = setEvolutionChain(dataChain.chain);
                
                setLoading(false);
                setChain(getEvolutionChain);

            } catch (err) {
                setLoading(false);
                setError(err);
            }
        };

        fetchData();

    }, [id]);

    return {
        loading, error, chains
    };

};

const setEvolutionChain = (chain: any): Evolution[] | null => {
    const evoChain = [];
    let evoData = chain;
    
    do {
        const evoDetails = evoData['evolution_details'][0];
    
        evoChain.push({
            'species_name': evoData.species.name,
            'min_level': !evoDetails ? 1 : evoDetails.min_level,
            'trigger_name': !evoDetails ? null : evoDetails.trigger.name,
            'url': !evoDetails ? null : evoData.species.url
        });
    
        evoData = evoData['evolves_to'][0];

    } while (!!evoData && Object.prototype.hasOwnProperty.call(evoData, 'evolves_to'));

    return evoChain.length ? evoChain : null;
};