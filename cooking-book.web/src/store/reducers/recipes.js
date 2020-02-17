import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [],
    loading: false,
    error: "",
    keyword: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) 
    {
        case actionTypes.FETCH_RECIPES_START:
            return {
                ...state,
                loading: true,
                error: ""
            };
        case actionTypes.FETCH_RECIPES_FAIL: 
            return {
                ...state,
                recipes: [],
                loading: false,
                error: action.error
            };
        case actionTypes.FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.recipes,
                loading: false,
                error: ""
            };
        case actionTypes.RECIPES_FILTER_CHANGED:
            return {
                ...state,
                keyword: action.keyword
            }
    }
    return state;
}

export default reducer;