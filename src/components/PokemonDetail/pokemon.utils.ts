import { useEffect, useState, useReducer } from 'react';

import { PokemonDetailState } from './types/PokemonDetail';
import { pokemonDetailReducer } from './pokemon.reducer';
import { setPokemonDetailErrorAction, setPokemonDetailLoadingAction, SetPokemonDetailAction } from './pokemon.actions';
import { Move, Evolution } from './types/PokemonDetail';

export const initialState: PokemonDetailState = {
    pokemonDetailLoading: false,
    pokemonDetailError: false,
    pokemonDetail: null,
    id: null
};

export const useFetchPokemon = (id: number) => {
    const [state, dispatch] = useReducer(pokemonDetailReducer, initialState);

    useEffect(() => {
        let controller = new AbortController();

        const fetchData = async () => {
            dispatch(setPokemonDetailLoadingAction(true));
            try {
                const response = await fetch(`${process.env.REACT_APP_POKEMON_API_URL}/${id}`, { signal: controller.signal });
        
                const {
                    sprites, name, order, abilities, types, stats, species, moves: filterMoves
                } = await response.json();
               
                const moves: Move[] = filterMoves.map((item: {
                    move: Move;
                }) => item.move);
        
                dispatch(setPokemonDetailLoadingAction(false));
                dispatch(SetPokemonDetailAction({sprites, name, order, abilities, types, stats, species, moves}, id));
        
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('FetchCancel');
                } else {
                    dispatch(setPokemonDetailLoadingAction(false));
                    dispatch(setPokemonDetailErrorAction(err));
                }
                
            }
        };
        fetchData();

        return () => {
            controller.abort();
        };

    }, [id]);

    return [state];
   
};

export const useFetchEvolutionChain = (id: number) => {
 
    const [chains, setChain] = useState<Evolution[] | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let controller1 = new AbortController();
        let controller2 = new AbortController();

        const fetchData = async () => {
            setLoading(true);

            try {
                const responseSpecies = await fetch(`${process.env.REACT_APP_POKEMON_SPECIES_API_URL}/${id}`, { signal: controller1.signal });
                const {evolution_chain} = await responseSpecies.json();

                const responseChain = await fetch(`${evolution_chain.url}`, { signal: controller2.signal });
                const dataChain = await responseChain.json();   

                const getEvolutionChain = setEvolutionChain(dataChain.chain);
                
                setLoading(false);
                setChain(getEvolutionChain);

            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('FetchCancel');
                } else {
                    setLoading(false);
                    setError(true);
                }
            }
        };

        fetchData();
        return () => {
            controller1.abort();
            controller2.abort();
        };
    }, [id]);

    return {
        loading, error, chains
    };

};

export const setEvolutionChain = (chain: any): Evolution[] | null => {
    const evoChain = [];
    let evoData = chain;
    
    do {
        const evoDetails = evoData['evolution_details'] ? evoData['evolution_details'][0] : null;
    
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