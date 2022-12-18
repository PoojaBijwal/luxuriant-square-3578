import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import EachProduct from '../Pages/EachProduct'
import Final from '../Pages/Final'
import Laptop from '../Pages/Laptop'
import Login from '../Pages/Login'
import Payments from '../Pages/Payments'
import Register from '../Pages/Register'
import Home from './Home'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/laptops' element={<Laptop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payments' element={<Payments/>}/>
        <Route path='/final' element={<Final/>}/>
        <Route path='/item/:id' element={<EachProduct/>}/>
    </Routes>
  )
}

export default AllRoutes;