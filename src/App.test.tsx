import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { listResponse } from './__mocks__/data';
import Store from './redux/store';

describe('App', () => {
    afterEach(cleanup);
    beforeEach(() => {
        fetch.resetMocks();
    });
    it('renders', () => {
        fetch.mockResponseOnce(JSON.stringify(listResponse));

        const { asFragment } = render(<App />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts text in h1', async () => {
        fetch.mockResponseOnce(JSON.stringify(listResponse));
            
        const { getByTestId } = render(<App />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });

        expect(getByTestId('loader')).toHaveClass('loader');

        const resolvedH1 = await waitForElement(() => getByTestId('h1'));
        expect(resolvedH1).toHaveTextContent('Pokemon');
        
    });
});