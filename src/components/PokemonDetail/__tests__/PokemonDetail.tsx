import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PokemonDetail from '../PokemonDetail';

afterEach(cleanup);

describe('PokemonDetail', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(<BrowserRouter><PokemonDetail /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});

