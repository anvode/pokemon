import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from '../../../redux/store';
import PokemonDetail from '../PokemonDetail';

describe('PokemonDetail', () => {
    afterEach(cleanup);

    it('renders without crashing', async () => {

        await act(async () => {
            const { asFragment } = render(<Provider store={Store} ><BrowserRouter><PokemonDetail /></BrowserRouter></Provider>);
            expect(asFragment()).toMatchSnapshot(); });
    });
});

