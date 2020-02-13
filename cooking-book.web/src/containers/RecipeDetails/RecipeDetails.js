import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {
    let { id } = useParams();
    return (
        <div>Recipe details: {id}</div>
    );
};

export default RecipeDetails;
