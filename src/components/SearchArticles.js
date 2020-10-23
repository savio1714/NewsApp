import React, { useState } from 'react';

function SearchArticles(props){
    const {onSearch} = props;

    const [searchText,setSearchText]= useState('');

    const handleInput=(e)=>{
        const text=e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed =(e)=>{
        if(e.key ==="Enter"){
            onSearch(searchText);
        }
    }


    return <div className="search">
        <input className="search-text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} value={searchText} type="text" name="search" placeholder="Search Articles"/>
        <hr className="hr-line"/>
    </div>
}

export default SearchArticles;