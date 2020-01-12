import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PokemonContext } from './contexts/PokemonContext';

const PokemonSum = () => {
    const { pokemons } = useContext(PokemonContext);
    if (pokemons == undefined) {
        return (<h1>loading</h1>);
    }
    else {
        return (
            pokemons.map((pokemon) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title><h2>{pokemon.name.toUpperCase()}</h2></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content. changed
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                );
            })
        );
    }

}

export default PokemonSum;