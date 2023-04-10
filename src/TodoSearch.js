import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Search..."
            value={searchValue}
            onChange={onSearchValueChange} 
        />
    );
}

export { TodoSearch }