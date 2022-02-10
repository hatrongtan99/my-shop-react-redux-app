import React from 'react';
import './cartOccupy.css';
import { useSelector, useDispatch } from 'react-redux';
import numberWithCommas from '../../../utils/numberWithCommas';
import { Link } from 'react-router-dom';
import { toggleCart, deleteProductFromCart } from '../../../redux/actions'; 


const CartOccupy = () => {

    const dispatch = useDispatch();

    const productInCart = useSelector(state => state.cartProduct)

  return (
      <div className='cart-occupy'>
          { productInCart.map((item, index) => (
            <div key={index} className='cart-occupy__item'>
                <i className="fas fa-times cart-occupy-close__item" onClick={() => dispatch(deleteProductFromCart(index))}></i>
                <Link to={`/products/${item.slug}`} onClick={() => dispatch(toggleCart(false))} >
                    <img src={item.img} alt=''/>
                </Link>
                <div className='cart-occupy__item__info'>
                    <Link to={`/products/${item.slug}`} onClick={() => dispatch(toggleCart(false))}>
                        <p>{item.name}</p>
                    </Link>
                    <span>{item.size}</span>
                    <div className='cart-occupy__item__info__qtt'>
                        <span>{item.quantity}</span>
                        <p>{numberWithCommas(item.price * item.quantity)} ₫</p>
                    </div>
                </div>
            </div>
          ))}
      </div>
  )
};

export default CartOccupy;
