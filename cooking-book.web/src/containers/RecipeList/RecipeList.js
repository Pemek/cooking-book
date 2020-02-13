import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import RecipeThumb from '../../components/RecipeThumb/RecipeThumb';

const recipeList = (props) => {
    return (
        <div>
            <Container fluid style={{display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center'}}>
                <RecipeThumb
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
            </Container>
        </div>
    );
};

export default recipeList;