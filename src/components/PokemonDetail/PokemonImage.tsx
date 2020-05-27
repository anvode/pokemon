import * as React from 'react';
import { useEffect, useState } from 'react';
import placeholder from '../../assets/not.png';

export interface PokemonImageProps {
    name: string;
    url: string | null;
}
const PokemonImage: React.FC<PokemonImageProps> = ({name, url}) => {
    const [imageLoading, setImageLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const image = url ? url : placeholder;
        setImageUrl(image);
    }, []);

    return <>
        <div className="pokemon-detail__image h-100 border align-items-center d-flex justify-content-center">
            <img
                className="img-fluid"
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
    </>; 
};

export default PokemonImage;