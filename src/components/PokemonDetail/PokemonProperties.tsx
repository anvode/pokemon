import * as React from 'react';
import { Ability, Type } from './types/PokemonDetail';
import { typeColors, capitalize } from '../../Helpers';

export interface PokemonPropertiesProps {
    name: string;
    order: number;
    abilities: Ability[];
    types: Type[];
}
const PokemonProperties: React.FC<PokemonPropertiesProps> = ({ name, order, abilities, types }) => {

    return <>
        <div className="card-header border-0 rounded-0 text-white bg-primary">
            <h2 className="card-title h4 mb-0">Properties</h2>
        </div>
           
        <div className="table-responsive border border-top-0">
            <table className="table mb-0">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Order</th>
                        <td>{order}</td>
                    </tr>
                    <tr>
                        <th scope="row">Type</th>
                        <td>{types.map(type => (
                            <span
                                key={type.type.name}
                                className="badge  mr-1 p-2"
                                style={{
                                    backgroundColor: `${typeColors[type.type.name]}`,
                                    color: 'white'
                                }}
                            >
                                {capitalize(type.type.name)}
                            </span>
                        ))}</td>
                    </tr>
                    <tr>
                        <th scope="row">Abilities</th>
                        <td>{abilities.map(ability => (
                            <span key={ability.ability.name} className="pokemon-properties__ability badge badge-light p-2 mr-1">
                                {capitalize(ability.ability.name)}
                            </span>
                        ))}</td>
                    </tr>
                        
                </tbody>
            </table>
        </div>
    </>; 
};

export default PokemonProperties;