import React, { useEffect } from 'react';
import './cartPageOccupy.css';
import { Link } from 'react-router-dom'
import numberWithCommas from '../../utils/numberWithCommas';
import { deleteProductFromCart,  updateProductQuantity} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { totalPriceProduct } from '../../redux/calc'

const CartPageOccupy = ({ productInCart }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <div className='row cart-page__occupy'>
            <h3 className='cart-page__title'>Giỏ hàng của bạn</h3>
            <p>Có {productInCart.length} sản phẩm trong giỏ hàng</p>
            <span className='cart-page__separate'></span>

            <div className='cart-product__container'>
              { productInCart.map((item, index) => (

                <div key={index} className='cart-product__item'>
                  <i className="fas fa-times cart-page__delete__icon" onClick={() => dispatch(deleteProductFromCart(index))}></i>
                  <div className='cart-product__img'>
                    <Link to={`/products/${item.slug}`}><img src={item.img} alt={item.name}/></Link>
                  </div>
                  <div className='cart-product__info'>
                    <div className='cart-product__info__title'>
                      <Link to={`/products/${item.slug}`}><h3>{item.name}</h3></Link>
                      <span>{numberWithCommas(item.price)} ₫</span>
                      <span>{item.size}</span>
                    </div>

                    <div className='cart-product__info__ajust'>
                      <div className='ajust-quantity'>
                          <input value='-' type='button' onClick={() => dispatch(updateProductQuantity({id: item.id, quantity: item.quantity <= 1 ? 1 : --item.quantity}))}></input>
                          <input className='select__quantity-text' type='text' value={item.quantity} ></input>
                          <input value='+' type='button' onClick={() => dispatch(updateProductQuantity({id: item.id, quantity: ++item.quantity}))}></input>
                      </div>
                      
                      <div className='ajust-total-price'>
                        <p>Thành tiền: <span>{numberWithCommas(item.price * item.quantity)}₫</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='cart-page__checkout row'>
          <div className='col-12 col-lg-6 cart-page__checkout-note'>
            <textarea placeholder='Ghi chú'></textarea>
          </div>

          <div className='col-12 col-lg-6 cart-page__checkout__total'>
            <div className='cart-page__checkout__total-price'>
              <p>Tổng tiền: <span>{numberWithCommas(totalPriceProduct(productInCart))} ₫</span></p>
            </div>
            <div className='cart-page__checkout__total-btn'>
              <Link to='/collections/all'><button className='btn-cart'>Tiếp tục mua hàng</button></Link>
              <button className='btn-cart'>Thanh toán</button>
            </div>
          </div>
        </div>
        </div>
    </>
  )
};

export default CartPageOccupy;
