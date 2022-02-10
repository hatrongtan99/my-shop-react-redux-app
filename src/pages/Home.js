import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../fakeData/products';
import { ProductLayout } from '../components';
import { bannerImgs } from '../assets/baner';
import { Slide, Helmet } from '../components';


const Home = () => {

  const products = getProducts(3);

  return (
    <>
      <Helmet title='Trang Chủ'>
        <div id='home' className='container-fluid g-0'>
          <div className='row g-0'>
                <Slide />
          </div>
          
          <div className='row link-baner g-0'>
            { bannerImgs.map((item, index) => (
              <div key={index} className='col-12 col-md-4 link-baner__item'>
                <Link to='/collections/all'>
                  <img className='banner__img' src={item} alt=''></img>
                </Link>
              </div>
            ))}
            
          </div>
          <div className='container'>
            <Link to='/collections/all'>
              <div className='section__title'>
                <h2 >sản phẩm bán chạy</h2>
              </div>
            </Link>
            <div className='row'>
              { products.map((item, index) => (
                <div key={index} className='col-6 col-lg-4 col-md-6'>
                  <ProductLayout item={item}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Helmet>
    </>
  )
};

export default Home;
