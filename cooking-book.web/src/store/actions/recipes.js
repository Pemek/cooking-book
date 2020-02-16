import * as actionTypes from './actionTypes';

export const fetchRecipesSuccess = (recipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_SUCCESS,
        recipes: recipes
    };
};

export const fetchRecipesFail = (error) => {
    return {
        type: actionTypes.FETCH_RECIPES_FAIL,
        error: error
    };
};

export const fetchRecipesStart = () => {
    return {
        type: actionTypes.FETCH_RECIPES_START
    };
};

export const fetchRecipes = () => {
    return async dispatch => {
        dispatch(fetchRecipesStart());
        const url = "https://localhost:5001/recipe";
        const response = await fetch(url, {
            method: 'GET'
        });
        const responseJson = await response.json();
        dispatch(fetchRecipesSuccess(responseJson));
    };
};
