import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {

    return (
        <div className="not-found">
            <h1 className="app__title text-center py-3">Page Not Found</h1>
            <div className="jumbotron text-center">
                <Link className="btn btn-primary mt-0" to={'/'}>Back to Pokemon List</Link>
            </div>

        </div>
    );
};

export default NotFound;
