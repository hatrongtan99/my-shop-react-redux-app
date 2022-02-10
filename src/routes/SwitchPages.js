import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import ShopPage from '../pages/ShopPage';
import BadHabbitClubPage from '../pages/BadHabbitClubPage';
import RemakeCollectionPage from '../pages/RemakeCollectionPage';
import ContactPage from '../pages/contactPage/ContactPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import SearchPage from '../pages/searchPage/SearchPage'

const SwitchPages = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='/products/:slug' element={<ProductDetailPage/>}/>
      <Route path='/collections/all' element={<ShopPage/>}/>
      <Route path='/collections/all-product' element={<ShopPage/>}/>
      <Route path='/collections/club' element={<ShopPage/>}/>
      <Route path='/collections/remake-collection' element={<ShopPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  )
};

export default SwitchPages;
