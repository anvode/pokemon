import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import Title from '../Title';
import { setTitleAction } from '../../../redux/pokemon/pokemon.actions';

import Store from '../../../redux/store';

describe('App', () => {
    afterEach(cleanup);
    
    it('renders', () => {
        const { asFragment } = render(<Title />, {
            wrapper: function child({ children }) {return <Provider store={Store}><BrowserRouter>{children}</BrowserRouter></Provider>;}
        });
        expect(asFragment()).toMatchSnapshot();
    });

});