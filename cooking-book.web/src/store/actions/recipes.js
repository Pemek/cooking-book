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

export const fetchRecipes = (keyword) => {
    return async dispatch => {
        dispatch(fetchRecipesStart());
        let url = `https://localhost:5001/recipe`;
        if(keyword && keyword.length > 0)
            url = `${url}/?keyword=${keyword}`;
        const response = await fetch(url, {
            method: 'GET'
        });
        const responseJson = await response.json();
        dispatch(fetchRecipesSuccess(responseJson));
    };
};

export const recipesFilterChanged = (keyword) => {
    return {
        type: actionTypes.RECIPES_FILTER_CHANGED,
        keyword: keyword
    };
}