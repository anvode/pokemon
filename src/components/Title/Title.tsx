
import * as React from 'react';
            
export interface TitleProps {
    name: string;
}
const Title: React.FC<TitleProps> = ({name}) => {
        
    return <>
        <h1 data-testid="h1" className="app__title  text-center p-3 mb-3">{name}</h1>

    </>;
};
            
export default Title;