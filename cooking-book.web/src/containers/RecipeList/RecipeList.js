import React from 'react'
import Container from 'react-bootstrap/Container'

import RecipeThumb from '../../components/RecipeThumb/RecipeThumb';

const RecipeList = (props) => {
    return (
        <div>
            <Container fluid style={{display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center'}}>
                <RecipeThumb
                    id={1}
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    id={1}
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    id={1}
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    id={1}
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
                <RecipeThumb
                    id={1}
                    img="http://forkgasm.com/images/bread-pudding.png"
                    name="Cake"
                    description="Some long description here" />
            </Container>
        </div>
    );
};

export default RecipeList;