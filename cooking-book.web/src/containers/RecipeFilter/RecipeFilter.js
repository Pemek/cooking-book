import React, { useState, useCallback, useRef } from 'react'
import { FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/recipes';

const RecipeFilter = (props) => {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.recipesReducer.keyword);
    const [search, setSearch] = useState(keyword);

    let timmer = useRef();
    const handleSearchChange = useCallback(
        (event) => {
            let localKeyword = event.target.value;
            setSearch(localKeyword);
            if(localKeyword.length < 3 && localKeyword.length > 0)
                return;
            clearTimeout(timmer.current);
            timmer.current = setTimeout(() => {
                dispatch(actions.recipesFilterChanged(localKeyword));
            }, 1000);        
        },
        [dispatch]
    );

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