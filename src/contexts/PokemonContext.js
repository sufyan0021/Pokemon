import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [state, setState] = useState([{
        loading: false,
        pokemons: null,
        id: null,
        total: null,
        per_page: null
    }]);

    const makeHttpRequestWithPage = (pageNumber) => {
        setState({ ...state, loading: true });
        axios.get(`http://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}`)
            .then(response => {
                setState({ loading: false, pokemons: response.data.results, id: null, total: response.data.count, per_page: 20, current_page: pageNumber });
            });
    }

    useEffect(() => {
        makeHttpRequestWithPage(0);
    }, [])

    return (
        <PokemonContext.Provider value={{ state, handleCurrentPage: makeHttpRequestWithPage, setState }}>
            {props.children}
        </PokemonContext.Provider>
    );

}

export default PokemonContextProvider;