import './App.css';

import Home from './Pages/Home/Home';


import AllRoutes from './Routes/AllRoutes'

 import Navbar from './Components/Navbar';

import './App.css';




function App() {
  return (
    <div className="App">

       <Home />
      
    </div>

      <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
      <AllRoutes/> 
    
      </div>

  );
}

export default App;
