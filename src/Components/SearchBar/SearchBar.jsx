import React, { useState, useEffect } from 'react';
import axios from "axios";
import './SearchBar.css';
import Table from '../GamesTable/GamesTable';


const SearchBar = ({library}) => {
    const [query, setQuery] = useState("");
    // useEffect(() => {
    //     fetchGame()
    //   }, [query])
    
    //   async function fetchGame(){
    //     let response = await axios.get(`http://localhost:8080?q=${query}`)
    //     setQuery(response.data)
    //   }


    let filterredlib = [];
    function filterring(){
        // debugger
        filterredlib = library.filter((item) => item.name.toLowerCase().includes(query))
        console.log(filterredlib)
        return filterredlib
    }

return <div className='searchbar'>
           {/* <form onSubmit={filterring}> */}
           <div className='search'>
               <input 
               type="text" placeholder="Search from all the Games in the history..." value={query} onChange={(event) => setQuery(event.target.value)} size="60"/>
               <button type='submit' onClick={filterring()}>FIND</button>
               {/* <div>
                    { condition ? (
                        <Table library={filterredlib}/>
                    ) : (
                        condition = true
                    )
                    } 
                </div> */}
           {/* </form> */}
           </div>
            <Table library={filterredlib}/>
       </div>;
    }
   
 
export default SearchBar;