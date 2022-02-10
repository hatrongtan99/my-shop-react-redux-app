import React from 'react';
import products from '../fakeData/products';
import { ProductLayout, Breadcrumb, Helmet } from '../components';

const ShopPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet title='Tất cả sản phẩm'>
        <Breadcrumb title='Tất cả sản phẩm'/>
        <div className='container'>
          <div className='row'>
            { products.map((item, index) => (
              <div key={index} className='col-6 col-sm-6 col-lg-3'>
                <ProductLayout item={item}/>
              </div>
            ))}
          </div>
        </div>
      </Helmet>
    </>
  )
};

export default ShopPage;
