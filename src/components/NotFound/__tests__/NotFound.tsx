import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from '../NotFound';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('NotFound', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(<BrowserRouter><NotFound /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});

