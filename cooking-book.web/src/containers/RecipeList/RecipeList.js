import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'

import * as actions from '../../store/actions/recipes';
import RecipeThumb from '../../components/RecipeThumb/RecipeThumb';
import Spinner from '../../components/UI/Spinner/Spinner';

const RecipeList = (props) => {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipesReducer.recipes);
    const keyword = useSelector(state => state.recipesReducer.keyword);
    const rLoading = useSelector(state => state.recipesReducer.loading);
    useEffect(() => {
        dispatch(actions.fetchRecipes(keyword));
    }, [keyword]);

    let recipeList = (
        <Spinner />
    );
    if(rLoading == false)
        recipeList = (
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
        );

    return (
        <div>
            {recipeList}
        </div>
    );
};

export default RecipeList;