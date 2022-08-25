import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return ( <div className='searchbar'>
        Search: <input type="search" />
    </div> );
}
 
export default SearchBar;