import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RecipeHeaderImage from '../../components/RecipeDetails/RecipeHeaderImage/RecipeHeaderImage';
import Ingredients from '../../components/RecipeDetails/Ingredients/Ingredients';
import Steps from '../../components/RecipeDetails/Steps/Steps';
import Spinner from '../../components/UI/Spinner/Spinner';


const RecipeDetails = () => {
    const { id } = useParams();
    let recipeDetails = null;
    const [recipeJson, setRecipeJson] = useState(null);

    
    useEffect(() => {
        const fetchRecipe = async () => {
            const url = `https://localhost:5001/recipe/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            setRecipeJson(json);
        };
        fetchRecipe();
    }, [id])

    recipeDetails = (<Spinner />);
    if (recipeJson !== null)
        recipeDetails = (
            <div>
                <RecipeHeaderImage image={recipeJson.image} />
                <div style={{textAlign: 'center'}}>
                    <h1>{recipeJson.name}</h1>
                    <h5>{recipeJson.tag.map(t => 
                            <Badge 
                                key={t}
                                style={{margin: '5px'}} 
                                variant="info">{t}</Badge>
                        )}
                    </h5>
                </div>
                <Container>
                    <Row>
                        <Col xs="12" sm="12" md="6"><Ingredients ingredients={recipeJson.ingredients} /></Col>
                        <Col xs="12" sm="12" md="6"><Steps steps={recipeJson.steps} /></Col>
                    </Row>
                </Container>
            </div>
        );
    return (
        <div>
            {recipeDetails}
        </div>
    );
};

export default RecipeDetails;
