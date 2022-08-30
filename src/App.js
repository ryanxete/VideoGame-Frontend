import React, { useState, useEffect } from 'react';
import './App.css';
import GlobalData from './Components/GlobalData/GlobalData';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import Table from './Components/GamesTable/GamesTable';


function App() {
  const [library, setLibrary] = useState([])


  useEffect(() => {
    fetchGames()
  }, [])

  async function fetchGames() {
    let respose = await axios.get("http://localhost:8080/all")
    setLibrary(respose.data);
  }

  return (
    <div className='page'>
      <Navbar />
      <GlobalData  library={library}/>
      <SearchBar library={library}/>
    </div>   
  );
}

export default App;
