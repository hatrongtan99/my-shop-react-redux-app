import React, { useEffect } from 'react';
import { ProductImage, ProductInfo, Breadcrumb, ProductLayout, Helmet } from '../components';
import products from '../fakeData/products';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fakeData/products';

const ProductDetailPage = () => {

  const { slug } = useParams();
    
    const product = products.find((product) => product.slug === slug)

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [product]);

  const relatedProducts = getProducts(4);

  return (
    <>
    <Helmet title={product.name}></Helmet>
      <Breadcrumb title={product.name}/>
      <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-5'>
              <ProductImage product={product} />
            </div>
            <div className='col-12 col-lg-7'>
              <ProductInfo product={product} />
            </div>
          </div>
      <div className='row'>
        <div className='section__title'>
          <h2>sản phẩm liên quan</h2>
        </div>
        { relatedProducts.map((item, index) => (
          <div key={index} className='col-6 col-lg-3 col-sm-6'>
            <ProductLayout item={item}/>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
