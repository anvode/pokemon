import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {

    return (
        <div className="not-found">
            <h1 className="app__title text-center">Page Not Found</h1>
            <Link className="btn btn-primary mt-4" to={'/'}>Back to Pokemon List</Link>

        </div>
    );
};

export default NotFound;
