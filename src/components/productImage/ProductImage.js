import React, { useState, useEffect } from 'react';
import './productImage.css';

const ProductImage = ({ product }) => {
    const [ prevImg, setPrevImg ] = useState(product.img1);

    useEffect(() => {
      setPrevImg(product.img1)
    }, [product])

  return (
      <div className='product-image sticky'>
          <div className='product-image__list'>
              <div className='product-image__list__item'>
                <img src={product.img1} alt='' onClick={() => setPrevImg(product.img1)}/>
              </div>
              <div className='product-image__list__item'>
                <img src={product.img2} alt='' onClick={() => setPrevImg(product.img2)}/>
              </div>
              <div className='product-image__list__item'>
                <img src={product.img3} alt='' onClick={() => setPrevImg(product.img3)}/>
              </div>
              <div className='product-image__list__item'>
                <img src={product.img4} alt='' onClick={() => setPrevImg(product.img4)}/>
              </div>
          </div>
          <div className='product-image__main'>
              <img src={prevImg} alt=''/>
          </div>
      </div>
  );
};

export default ProductImage;
