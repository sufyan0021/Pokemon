import React, { useContext } from 'react';
import './App.css';
import PokemonContextProvider from './contexts/PokemonContext';
import { PokemonContext } from './contexts/PokemonContext';
import ReactPaginate from 'react-paginate';

const PageNumberRender = (props) => {
    const { total, per_page, current_page, handleCurrentPage } = useContext(PokemonContext);

    const numberOfPages = total / per_page;

    return (
        <ReactPaginate
            onPageChange={({ selected }) => {
                handleCurrentPage(selected * per_page)
            }}
            pageCount={numberOfPages}
            pageRangeDisplayed={10}
            marginPagesDisplayed={2}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );

}

export default PageNumberRender