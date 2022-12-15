import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';
import Payment from '../Pages/Payment';
import Checkout from '../Pages/Checkout';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/payments' element={<Payment/>}/>
        
    </Routes>
  )
}

export default AllRoutes