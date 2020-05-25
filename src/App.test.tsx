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
        fetchMock.resetMocks();
    });
    
    it('renders', () => {
        fetchMock.mockResponseOnce(JSON.stringify(listResponse));

        const { asFragment } = render(<App />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();
    });

});