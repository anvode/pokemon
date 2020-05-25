export interface PokemonState {
    pokemonFetchLoading: boolean;
    pokemonFetchError: boolean;
    pokemonList: PokemonItem[];
    next: string | null;
    previous: string | null;
    offset: number;
    limit: number;
    count: number;
}

export interface PokemonItem {
  name: string;
  url: string
}
