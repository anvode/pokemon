import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../../../redux/store';
import PokemonDetail from '../PokemonDetail';

describe('PokemonDetail', () => {
    afterEach(cleanup);
    
    it('renders without crashing', () => {
        const { asFragment } = render(<PokemonDetail />, {
            wrapper: function child({ children }) {return <Provider store={Store} ><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();
    });
});

