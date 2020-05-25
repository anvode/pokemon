import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../redux/root-reducer';

import './Pagination.scss';

export interface PaginationProps{}

const Pagination: React.FC<PaginationProps> = () => {
    const { count, limit, offset } = useSelector((state: RootState) => state.pokemon);

    const paginationList: number[] = [];

    const getCurrentIndex = offset / limit === 0 ? 1 : offset / limit + 1;

    for (let i = 1; i <= Math.ceil(count / limit); i++) {
        paginationList.push(i);
    } 

    return <>
        <nav aria-label="Pokemon Page navigation">
            <ul className='pagination flex-wrap justify-content-center'>
                {paginationList.map(page => (
                    <li key={page} className={`page-item  mb-2 ${getCurrentIndex === page && 'active'}`} >
                        <Link data-number={page} className="page-link" to={`/?page=${page}`}>{page}</Link></li>
                ))}
            </ul>
        </nav>
    </>;
};

export default Pagination;