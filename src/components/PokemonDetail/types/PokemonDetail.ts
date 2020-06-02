
export interface PokemonDetailState {
    pokemonDetailLoading: boolean;
    pokemonDetailError: boolean;
    pokemonDetail: Pokemon | null;
    id: number | null
}

export interface Filter {
    [key: string]: string;
}

export interface Pokemon {
    sprites: Image;
    name: string;
    order: number;
    abilities: Ability[];
    types: Type[];
    stats: State[];
    species: {
        name: string;
        url: string;
    };
    moves: Move[];
    [key: string]: number | string | boolean | object | null | undefined;
}

export interface Image {
    [key: string]: string | null;
}

export interface Move {
    name: string;
    url: string;
}

export interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface Venue {
    city: string;
    houseNumber: string;
    name: string;
    street: string;
    uid: number;
    zipCode: string;
}

export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface State {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface Evolution {
    species_name: string,
    min_level: number,
    trigger_name: string,
    url: string | null
}

export interface EvolutionChainItem {
    evolution_details: any[];
    evolves_to: EvolutionChainItem[];
    is_baby: boolean;
    species: {
        name: string;
        url: string;
    }
}