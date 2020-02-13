import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Ingredients = (props) => {
    const { ingredients } = props;
    return (
        <Alert variant="primary">
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(i => {
                    return <li key={i.id}>{i.amount} {i.unit} {i.name}</li>
                })}
            </ul>
        </Alert>
    );
};

export default Ingredients;