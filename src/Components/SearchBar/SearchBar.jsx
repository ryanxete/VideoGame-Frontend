import React, { useState, useEffect } from 'react';
import axios from "axios";
import './SearchBar.css';


const SearchBar = ({library}) => {
    const [query, setQuery] = useState("");
        
    // useEffect(()=>{
    //     const fetchGame
    // })

    return ( <div className='searchbar'>
        {/* <span>Search: </span>*/}<input 
         type="text" placeholder="Search..." value={query} onChange={(event) => setQuery(event.target.value)}/>
         <table>
            <tr>
                data={[library]}
            </tr>
         </table> 
    </div> );
}
 
export default SearchBar;