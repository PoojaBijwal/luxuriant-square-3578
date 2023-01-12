import './App.css';
import Home from './Pages/Home/Home';
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar';
import './App.css';
import Admin from "./Pages/Admin";



function App() {
  return (
    <div className="App">
       {/* <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
       <AllRoutes/> */}

       <Admin />
    </div>
  );
}

export default App;
