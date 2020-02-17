import React, { useState } from 'react'
import { FormControl, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/recipes';

const RecipeFilter = (props) => {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.recipesReducer.keyword);
    const [search, setSearch] = useState(keyword);

    let timmer;
    const handleSearchChange = event => {
        let localKeyword = event.target.value;
        setSearch(localKeyword);
        clearTimeout(timmer);
        timmer = setTimeout(() => {
            dispatch(actions.recipesFilterChanged(localKeyword));
        }, 1000);
    };

    return (
        <div className="form-inline">
            <FormControl 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                value={search}
                onChange={handleSearchChange} />
        </div>
    );
};

export default RecipeFilter;