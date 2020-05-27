import * as React from 'react';
import { State } from './types/PokemonDetail';
import { capitalize } from '../../Helpers';

export interface PokemonStatsProps {
    stats: State[];
}
const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {

    return <>
        <div className="card-header border-0 rounded-0 text-white bg-primary mt-3">
            <h2 className="card-title h4 mb-0">Stats</h2>
        </div>
           
        <div className="table-responsive">
            <table className="table mb-0 table-bordered border-top-0">
                <thead>
                    <tr>
                        <th scope="col">Stat</th>
                        <th colSpan={2} scope="col">Base</th>
                        <th scope="col">EV</th>
                    </tr>
                </thead>
                <tbody>
                    {stats.map(state => (
                        <tr key={state.stat.name}>
                            <th scope="col" className="pokemon-detail__shrink">
                                {capitalize(state.stat.name)}  
                            </th>
                            <td className="pokemon-detail__shrink">
                                <div>{state.base_stat}</div>
                            </td>
                            <td>
                                <div className="progress">
                                    <div className="progress-bar bg-info" 
                                        role="progressbar" 
                                        style={{
                                            width: `${100 / 255 * state.base_stat}%`
                                        }} 
                                        aria-valuenow={state.base_stat}
                                        aria-valuemin={0}
                                        aria-valuemax={255}
                                    >
                                       
                                    </div>
                                </div>
                            </td>
                            <td className="pokemon-detail__shrink">
                                <div>{state.effort}</div>
                            </td>
                        </tr>
                           
                    ))}
                        
                </tbody>
            </table>
        </div>
    </>; 
};

export default PokemonStats;