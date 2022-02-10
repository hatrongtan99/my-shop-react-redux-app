import React from 'react';
import { Link } from 'react-router-dom';
import { CartPageEmpty , CartPageOccupy, Helmet } from '../components';
import { useSelector } from 'react-redux';
const CartPage = () => {

  const productInCart = useSelector(state => state.cartProduct)

  return (
    <>
      <Helmet title='Giỏ hàng của bạn'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
          </ol>
        </nav>
        <div className='container cart-page'>
          { productInCart.length > 0 ? <CartPageOccupy productInCart={productInCart}/> : <CartPageEmpty/>}
          
        </div>
      </Helmet>
    </>
  )
};

export default CartPage;
