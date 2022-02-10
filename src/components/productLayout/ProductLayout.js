import React, { memo } from 'react';
import './productLayout.css';
import {Link} from 'react-router-dom'
import numberWithCommas from '../../utils/numberWithCommas';
import { toggleCart, addProductToCart } from '../../redux/actions';
import { useDispatch} from 'react-redux';

const ProductLayout = ({ item }) => {

    const dispatch = useDispatch();

    const hanldeAddProduct = () => {
        dispatch(toggleCart(true))
        dispatch(addProductToCart({
            id: item.id,
            name: item.name,
            slug: item.slug,
            price: item.price,
            img: item.img1,
            size: item.size[0],
            quantity: 1,
        }))
    }

  return (
      <>
        <div className='product__layout'>
            <div className='product__layout__img'>
                <Link to={`/products/${item.slug}`} >
                    <img src={item.img2} alt={item.name} className='product__layout__img__back '/>
                    <img src={item.img1} alt={item.name} className='product__layout__img__front'/>
                </Link>
                <i className="fas fa-cart-plus product__layout__cart__plus" onClick={hanldeAddProduct}></i>
            </div>
            <div className='product__layout__info'>
                <h3><Link to={`/products/${item.slug}`}>{item.name}</Link></h3>
                <h3>{numberWithCommas(item.price)} VND</h3>
            </div>
        </div>
      </>
  );
};

export default memo(ProductLayout);
