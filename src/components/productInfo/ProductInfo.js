import React , {useState, useLayoutEffect, useEffect } from 'react';
import './productInfo.css';
import numberWithCommas from '../../utils/numberWithCommas';
import { toggleCart } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/actions';

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();

    const [ active, setActive ] = useState(product.size[0]);
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        setActive(product.size[0])
    }, [product])

    useLayoutEffect(() => {
        if (count < 0 ) {
            setCount(1)
        }
    }, [count])

    const handleAddActive = (sizeName) => {
        setActive(sizeName)
    }

    const handleButtonAddProduct = () => {
        dispatch(toggleCart(true))
        dispatch(addProductToCart({
            id: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            img: product.img1,
            size: active,
            quantity: count,
        }))
        setActive(product.size[0])
        setCount(1)
    }
  return (
      <div className='product-Info'>
        <h1 className='product-Info__name'>{product.name}</h1>
        <span className='product-Info__price'>{numberWithCommas(product.price)} VND</span>
        { product.size.length > 0 && 
        <div className='product-Info__select__size'>
            {product.size.map((sizeName, index) => (
                    <div key={index} 
                    className={`product-Info__select__size__item ${active === sizeName ? 'active' : ''}`}
                    onClick={() => handleAddActive(sizeName)}
                    >
                        <span>{sizeName}</span>
                    </div>
                )
                )}
        </div> }

        <div className='product-Info__select__quantity'>
            <input value='-' type='button' onClick={() => setCount(count - 1)}></input>
            <input className='select__quantity-text' type='text' value={count} onChange={(e) => setCount(Number(e.target.value))}></input>
            <input value='+' type='button' onClick={() => setCount(count + 1)}></input>
        </div>

        <div className='button__add__cart'>
            <button type='button' onClick={handleButtonAddProduct} >THÊM VÀO GIỎ</button>
        </div>
        <div className='product-Info__description'>
            <span>Mô tả</span>
            <p>{product.description}</p>
        </div>
        <div className='product-Info__size'>
            <img src={product.img5} alt=''/>
        </div>
      </div>
  );
};

export default ProductInfo;
