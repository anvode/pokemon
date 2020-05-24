import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
    afterEach(cleanup);
    
    it('renders without crashing', () => {
        const { asFragment } = render(<Loader />);
        expect(asFragment()).toMatchSnapshot();
    });
});

