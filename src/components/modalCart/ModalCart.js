import React from 'react';
import './modalCart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/actions';
import CartOccupy from './cartOccupy/CartOccupy';
import { totalPriceProduct } from '../../redux/calc';
import numberWithCommas from '../../utils/numberWithCommas';

const ModalCart = () => {

    const productInCart = useSelector(state => state.cartProduct);


    const totalProduct = totalPriceProduct(productInCart);

    const dispatch = useDispatch();

  return (
      <div className='modal-cart' onClick={() => dispatch(toggleCart(false))}>
        <div className='modal-cart__container' onClick={(e) => e.stopPropagation()}>
            <div className='modal-cart__title'>giỏ hàng</div>
            <div className='modal-cart__close' onClick={() => dispatch(toggleCart(false))}>
                <i className="fas fa-times"></i>
            </div>
            <div className='cart__d-flex'>
                { productInCart.length > 0 ? <CartOccupy /> :
                <div className='cart-empty'>Hiện chưa có sản phẩm</div> }
                <span className='cart-separate'></span>
                <div className='cart-total-price'>
                    <p>Tổng tiền:</p>
                    <span>{numberWithCommas(totalProduct)} ₫</span>    
                </div>
                <span className='cart-separate'></span>
                <div className='cart-btn'>
                    <Link to='/cart'><button type='button'onClick={() => dispatch(toggleCart(false))}>XEM GIỎ HÀNG</button></Link>
                    <button type='button' >THANH TOÁN</button>    
                </div>
            </div>   
        </div>
      </div>
  )
};

export default ModalCart;
