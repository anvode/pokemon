import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { capitalize } from '../../Helpers';
import placeholder from '../../assets/not.png';
export interface PokemonItemProps {
    name: string;
    url: string
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, url }) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const index = url.split('/')[url.split('/').length - 2];

    useEffect(() => {
        setImageUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`);
    }, [index]);

    return <>
        <div key={name} className="col-md-4">
            <Link to={`/pokemon/${index}`} className="card-link d-block mb-4">
                <div className="card">
                    <div className="card-header bg-primary text-light d-flex justify-content-between">
                        <span className="pokemon__index">{index}</span>  <span className="pokemon__name">{capitalize(name)}</span>
                    </div>
                    <div className="card-img-top d-flex justify-content-center" style={{
                        height: '96px'
                    }}>
                        {imageLoading ? (
                            <Loader></Loader>
                        ) : (
                            null
                        )}
                        <img
                            className="image"
                            src={imageUrl}
                            alt={name}
                            onLoad={() => setImageLoading(false)}
                            onError={() => {
                                setImageLoading(false);
                                setImageUrl(placeholder);
                            }}
                            style={
                                imageLoading
                                    ? { display: 'none' }
                                    : { display: 'block' }
                            }
                        />
                    </div>
                  
                </div>
            </Link>
        </div>
    </>;
};

export default PokemonItem;