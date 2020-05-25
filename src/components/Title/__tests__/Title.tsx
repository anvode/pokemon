import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Title from '../Title';

import Store from '../../../redux/store';

describe('App', () => {
    afterEach(cleanup);
    
    it('renders', () => {
        const { asFragment } = render(<Title name="Title"/>, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts text in h1', async () => {
            
        const { getByTestId } = render(<Title name="Title"/>, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });

        expect(getByTestId('h1')).toHaveClass('app__title');

        expect(getByTestId('h1')).toHaveTextContent('Title');
        
    });

});