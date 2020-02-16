import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

import RecipeHeaderImage from '../../components/RecipeDetails/RecipeHeaderImage/RecipeHeaderImage';
import Ingredients from '../../components/RecipeDetails/Ingredients/Ingredients';
import Steps from '../../components/RecipeDetails/Steps/Steps';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeDetails = () => {
    const { id } = useParams();
    let recipeDetails = null;
    const [recipeJson, setRecipeJson] = useState(null);

    const fetchRecipe = async () => {
        const url = `https://localhost:5001/recipe/${id}`;
        const response = await fetch(url);
        const json = await response.json();
        setRecipeJson(json);
    };
    useEffect(() => {
        fetchRecipe();
    }, [])

    recipeDetails = (<div>Loading..</div>);
    if (recipeJson !== null)
        recipeDetails = (
            <div>
                <RecipeHeaderImage image={recipeJson.image} />
                <div style={{textAlign: 'center'}}>
                    <h1>{recipeJson.name}</h1>
                    <h5>{recipeJson.tag.map(t => <Badge style={{margin: '5px'}} variant="info">{t}</Badge>)}</h5>
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

const recipeJson = {
    "name": "Tal’s Tahini “bread pudding”",
    "id": "tahini-bread-pudding",
    "description": "A delicious baked dessert that takes 5 minutes to make!",
    "tagArr": [
        "Dessert"
    ],
    "image": "http://forkgasm.com/images/bread-pudding.png",
    "ingredients": [
        {
            "amount": "0.5",
            "unit": "cup",
            "name": "tahini"
        },
        {
            "amount": "4",
            "name": "eggs"
        },
        {
            "amount": "1",
            "unit": "tsp",
            "name": "baking powder"
        },
        {
            "amount": "30",
            "unit": "g",
            "name": "honey"
        },
        {
            "amount": "3",
            "unit": "tbsp",
            "name": "Sukrin Gold or brown sugar"
        },
        {
            "amount": "1",
            "unit": "tsp",
            "name": "maple extract"
        },
        {
            "name": "cinammon",
            "amount": "1",
            "unit": "tsp"
        },
        {
            "name": "sesame seeds for garnish"
        }
    ],
    "steps": [
        {
            "description": "Beat all ingredientss together really well in a blender."
        },
        {
            "description": "Pour mixture in an oiled cake tray (we suggest sesame oil for the oiling) and sprinkle with sesame seeds."
        },
        {
            "description": "Bake for 25-30 minutes at 345F (convection bake is better). Depending on your oven, you may want to turn it around (horizontally) after 15 minutes to ensure even baking."
        },
        {
            "description": "Done, enjoy! We actually eat it with a spoon straight from the cake tray!"
        }
    ],
    "notes": "- If you are not avoiding carbs, you can substitute the maple extract with maple syrup.\n- Add two bananas and a good handful of walnuts to the mix and you have banana walnut bread!\n- Other ingredientss we've tried (not all at once!): cardamom, Grand Marnier, vanilla extract. Feel free to experiment!",
    "forked": "My friend Tal's \"tahini bread\" recipe."
};

export default RecipeDetails;
