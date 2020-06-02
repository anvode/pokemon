export const listResponse = { 
    count: 1,
    next: null,
    previous: null,
    results: [{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}] 
};

export const chainResponse = {
    'baby_trigger_item': null,
    'chain': {
        'evolution_details': [],
        'evolves_to': [
            {
                'evolution_details': [
                    {
                        'gender': null,
                        'held_item': null,
                        'item': null,
                        'known_move': null,
                        'known_move_type': null,
                        'location': null,
                        'min_affection': null,
                        'min_beauty': null,
                        'min_happiness': null,
                        'min_level': 16,
                        'needs_overworld_rain': false,
                        'party_species': null,
                        'party_type': null,
                        'relative_physical_stats': null,
                        'time_of_day': '',
                        'trade_species': null,
                        'trigger': {
                            'name': 'level-up',
                            'url': 'https://pokeapi.co/api/v2/evolution-trigger/1/'
                        },
                        'turn_upside_down': false
                    }
                ],
                'evolves_to': [
                    {
                        'evolution_details': [
                            {
                                'gender': null,
                                'held_item': null,
                                'item': null,
                                'known_move': null,
                                'known_move_type': null,
                                'location': null,
                                'min_affection': null,
                                'min_beauty': null,
                                'min_happiness': null,
                                'min_level': 36,
                                'needs_overworld_rain': false,
                                'party_species': null,
                                'party_type': null,
                                'relative_physical_stats': null,
                                'time_of_day': '',
                                'trade_species': null,
                                'trigger': {
                                    'name': 'level-up',
                                    'url': 'https://pokeapi.co/api/v2/evolution-trigger/1/'
                                },
                                'turn_upside_down': false
                            }
                        ],
                        'evolves_to': [],
                        'is_baby': false,
                        'species': {
                            'name': 'charizard',
                            'url': 'https://pokeapi.co/api/v2/pokemon-species/6/'
                        }
                    }
                ],
                'is_baby': false,
                'species': {
                    'name': 'charmeleon',
                    'url': 'https://pokeapi.co/api/v2/pokemon-species/5/'
                }
            }
        ],
        'is_baby': false,
        'species': {
            'name': 'charmander',
            'url': 'https://pokeapi.co/api/v2/pokemon-species/4/'
        }
    },
    'id': 2
};

export const chainResponseNoChain = {
    'baby_trigger_item': null,
    'chain': {
        'evolution_details': [],
        'evolves_to': [],
        'is_baby': false,
        'species': {
            'name': 'charmander',
            'url': 'https://pokeapi.co/api/v2/pokemon-species/4/'
        }
    },
    'id': 2
};

export const expectedSetEvolutionChain = [
    {
        'min_level': 1, 
        'species_name': 'charmander', 
        'trigger_name': null, 'url': null
    }, 
    {
        'min_level': 16, 
        'species_name': 'charmeleon', 
        'trigger_name': 
        'level-up', 'url': 'https://pokeapi.co/api/v2/pokemon-species/5/'
    }, 
    {
        'min_level': 36, 
        'species_name': 
        'charizard', 'trigger_name': 
        'level-up', 'url': 'https://pokeapi.co/api/v2/pokemon-species/6/'
    }
];

export const expectedChainResponseNoChain = [
    {
        'min_level': 1,
        'species_name': 'charmander',
        'trigger_name': null,
        'url': null,
    }
];