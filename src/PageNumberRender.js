import React, { useContext } from 'react';
import './App.css';
import PokemonContextProvider from './contexts/PokemonContext';
import { PokemonContext } from './contexts/PokemonContext';

const PageNumberRender = (props) => {
    const { total, per_page, current_page, handleCurrentPage } = useContext(PokemonContext);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / per_page); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        if (current_page === number) {
            return (
                <span key={number} className='active'>{number}</span>
            );
        }
        else {
            return <span key={number} onClick={(e) => { handleCurrentPage(e.target.innerText); }}>{number}</span>
        }
    });
    return (
        <div className='pagination'>
            <span>&laquo;</span>
            {renderPageNumbers}
        </div>
    );

    /*if (total == undefined && per_page == undefined) {
        return (<h1>loading pagenum</h1>);
    }
    else {
        return (
            //console.log(total + " is " + per_page)
            console.log('pagenums arre', pageNumbers)
        );
    }*/
}

export default PageNumberRender