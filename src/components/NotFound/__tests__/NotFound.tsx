import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from '../NotFound';

afterEach(cleanup);

describe('NotFound', () => {
    it('renders without crashing', () => {
        const { asFragment } = render(<NotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});

