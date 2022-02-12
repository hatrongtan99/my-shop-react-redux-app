import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import './header.css';
import Navbar from './navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, searchProduct } from '../../redux/actions';
import {SearchModalInput} from '../../components'

const Header = () => {

  const [ openModal, setOpenModal ] = useState(false);

  const [ openModalSearch, setOpenModalSearch ] = useState(false);

  const [ textSearch, setTextSearch ] = useState(null);

  const handleTextSearch = () => {
    dispatch(searchProduct(textSearch));
    setTextSearch('')
}

  const dispatch = useDispatch()
  return (

      <div className='header'>
        <div className='header__logo'>
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
          <div className='show__in__md hiden-in-mobile'>
            <a href='https://www.facebook.com/badhabitsstore' >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href='https://www.instagram.com/badhabitsstore.vn/?hl=vi'>
              <i className="fab fa-instagram"></i>
            </a>
            <Link to='/'>
              <i className="fas fa-user-circle"></i>
            </Link>
              <i className="fas fa-search header-search-icon" onClick={() => setOpenModalSearch(!openModalSearch)}></i>
          </div>
            <i className="fas fa-shopping-cart cart-icon" onClick={() => dispatch(toggleCart(true))}></i>
          <div className='menu__btn__md' onClick={() => setOpenModal(true)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <div className='header-search-mobile d-lg-none'>
            <input type='text' placeholder='Tìm kiếm sản phẩm...' onChange={(e) => setTextSearch(e.target.value)} value={textSearch}></input>
            <div className='header-search-mobile__icon' onClick={handleTextSearch}>
                <Link to='/search'><i className="fas fa-search"></i></Link>
            </div>
        </div>


        <Navbar 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

        {openModalSearch && 
        <SearchModalInput 
          openModalSearch={openModalSearch}
          setOpenModalSearch={setOpenModalSearch}
        />}

      </div>
  )
};

export default Header;
