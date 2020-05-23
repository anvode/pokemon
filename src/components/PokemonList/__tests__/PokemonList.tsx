import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import PokemonList from '../PokemonList';

afterEach(cleanup);

describe('PokemonList', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(<PokemonList />);
        expect(asFragment()).toMatchSnapshot();
    });
});

