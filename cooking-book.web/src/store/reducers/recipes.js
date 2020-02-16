import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: [],
    loading: false,
    error: ""
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
            }
    }
    return state;
}

export default reducer;