import * as React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { listResponse } from '../../../__mocks__/data';
import Store from '../../../redux/store';
import PokemonList from '../PokemonList';

describe('PokemonList', () => {
    afterEach(cleanup);
    beforeEach(() => {
        fetchMock.resetMocks();
    });
    
    it('renders without crashing', () => {
        fetchMock.mockResponseOnce(JSON.stringify(listResponse));

        const { asFragment } = render(<PokemonList />, {
            wrapper: function child({ children }) {return <Provider store={Store} ><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            'https://pokeapi.co/api/v2/pokemon?offset=0&limit=30'
        );
    });

    it('render correctly', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(listResponse));
        const { getByText } = render(<PokemonList />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });

        const resolvedItem = await waitForElement(() => getByText('Bulbasaur'));
        expect(resolvedItem).toHaveTextContent('Bulbasaur');

    });

    it('inserts text in h1', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(listResponse));
            
        const { getByTestId } = render(<PokemonList />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });

        expect(getByTestId('loader')).toHaveClass('loader');

        const resolvedH1 = await waitForElement(() => getByTestId('h1'));
        expect(resolvedH1).toHaveTextContent('Pokemon');
        
    });
});

