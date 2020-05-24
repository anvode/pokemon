
import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
            
export interface TitleProps {}
const Title: React.FC<TitleProps> = () => {
    const { title } = useSelector((state: RootState) => state.pokemon);
        
    return <>
        <h1 data-testid="h1" className="app__title bg-light p-3 mb-3">{title}</h1>

    </>;
};
            
export default Title;