import './App.css';
// import AllRoutes from './components/AllRoutes';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import './App.css';
import Admin from "./Pages/Admin"
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <div style={{position:"sticky",top:"0",zIndex:1}}>
        {/* <Navbar/> */}
        </div>
      {/* <AllRoutes/> */}
      {/* <Footer/> */}
      <Login />
      <Register />
      <Cart />

     <Admin />
      {/* <Home />
      <Footer/> */}
     </div>
  );
}

export default App;
