import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import ProductAll from '../page/ProductAll';
import ProductDetail from '../page/ProductDetail';
import Login from '../page/Login';
import Register from '../page/Register';
import ProductBags from '../page/ProductBags';
import ProductWallet from '../page/ProductWallet';
import ProductAcc from '../page/ProductAcc';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<ProductAll />} />
        <Route path='/product/bag' element={<ProductBags />} />
        <Route path='/product/wallet' element={<ProductWallet />} />
        <Route path='/product/acc' element={<ProductAcc/> }/>
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={ <Register/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter