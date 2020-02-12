import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import RecipeThumb from '../../components/RecipeThumb/RecipeThumb';

const recipeList = (props) => {
    return (
        <div>
            <Container fluid>
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
                <RecipeThumb />
            </Container>
        </div>
    );
};

export default recipeList;