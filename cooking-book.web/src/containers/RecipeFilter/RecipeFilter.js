import React, { useState } from 'react'
import { FormControl, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/recipes';

const RecipeFilter = (props) => {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.recipesReducer.keyword);
    const [search, setSearch] = useState(keyword);

    const handleSearchClick = () => {
        dispatch(actions.recipesFilterChanged(search));
    };
    const handleSearchKeyPress = event => {
        if (event.key == 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="form-inline">
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyPress={handleSearchKeyPress} />
            <Button 
                variant="outline-success" 
                onClick={handleSearchClick}>Search</Button>
        </div>
    );
};

export default RecipeFilter;