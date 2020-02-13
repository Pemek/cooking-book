import React from 'react'

const Ingredients = (props) => {
    const { ingredients } = props;
    return (
        <div>
            <h2>Ingredients</h2>
                <ul>
                    {ingredients.map(i => {
                        return <li key={i.id}>{i.amount} {i.unit} {i.name}</li>
                    })}
                </ul>
            </div>
    );
};

export default Ingredients;