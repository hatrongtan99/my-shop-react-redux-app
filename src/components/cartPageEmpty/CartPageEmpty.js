import React from 'react';
import './cartPageEmpty.css';
import { Link } from 'react-router-dom'

const CartPageEmpty = () => {
  return (
      <>
        <div className='row cart-page__empty'>
            <h3 className='cart-page__title'>Giỏ hàng của bạn</h3>
            <p>Có 0 sản phẩm trong giỏ hàng</p>
            <span className='cart-page__separate'></span>
            <p>Giỏ hàng của bạn đang trống</p>
            <Link to='/collections/all'>
                <button className='cart-page__btn__shopping btn-cart' type='button'>Tiếp tục mua hàng</button>
            </Link>
        </div>
      </>
  )
};

export default CartPageEmpty;
