import React, { useState } from 'react';
import './App.css';
import GlobalData from './Components/GlobalData/GlobalData';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
// import { Chart } from "react-google-charts";


function App() {

  const [library, setLibrary] = useState([])

  async function fetchGames() {
      let respose = await axios.get("http://localhost:8080/all")
      setLibrary(respose.data);
      console.log("Games: ", respose.data)
  }
  return (
    <div>
      <Navbar />
      <GlobalData  parentData={library}/>
      <SearchBar/>
    </div>
        
  );
}

export default App;
