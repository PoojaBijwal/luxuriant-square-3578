import './App.css';
import AllRoutes from './Routes/AllRoutes'
// import Footer from './components/Footer';
 import Navbar from './Components/Navbar';

import './App.css';


function App() {
  return (
    <div className="App">
      <div style={{position:"sticky",top:"0",zIndex:1}}><Navbar/></div>
      <AllRoutes/> 
      {/* <Footer/>  */}
      {/* <Admin /> */}
      </div>
  );
}

export default App;
