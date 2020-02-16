import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useSelector, useDispatch } from 'react-redux'

import * as actions from '../../store/actions/recipes';
import RecipeThumb from '../../components/RecipeThumb/RecipeThumb';

const RecipeList = (props) => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipesReducer.recipes);

    useEffect(() => {
        dispatch(actions.fetchRecipes());
    }, []);

    return (
        <div>
            <Container fluid style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {recipes.map(r => 
                    <RecipeThumb
                    key={r.id}
                    id={r.id}
                    img={r.image}
                    name={r.name}
                    description={r.description} />
                )}
            </Container>
        </div>
    );
};

export default RecipeList;