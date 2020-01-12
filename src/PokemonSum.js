import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PokemonContext } from './contexts/PokemonContext';
//import { PokemonDetContext } from './contexts/PokemonDetContext';
import Spinner from 'react-bootstrap/Spinner'

const PokemonSum = (props) => {
    const { state, pokemons, id, setState, loading } = useContext(PokemonContext);
    //const { makeHttpRequestWithDetPage } = useContext(PokemonDetContext);
    let i = 1;
    if (loading) {
        return (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>);
    }
    else {
        return (
            pokemons ? pokemons.map((pokemon) => {
                //setState(...state, { id: pokemon.url.split('/')[6] });
                return (
                    <Card style={{ width: '18rem' }} key={i++}>
                        <Card.Body>
                            <Card.Title><h2>{pokemon.name.toUpperCase()}</h2></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. changed
                            </Card.Text>
                            <Button variant="primary" onClick={() => {
                                props.history.push({
                                    pathname: '/pokemon',
                                    state: { url: pokemon.url }
                                })
                            }}>More Details</Button>
                        </Card.Body>
                    </Card>
                );
            }) : <div />
        );
    }

}

export default PokemonSum;