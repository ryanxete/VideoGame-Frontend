import './App.css';
import GlobalData from './Components/GlobalData/GlobalData';
import Navbar from './Components/Navbar/Navbar';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div>
      <Navbar />
      <GlobalData />
      <SearchBar/>
    </div>
        
  );
}

export default App;
