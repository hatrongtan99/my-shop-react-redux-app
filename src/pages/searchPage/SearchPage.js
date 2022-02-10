import React from 'react';
import './searchPage.css';
import { ProductLayout, Helmet } from '../../components';
import { useSelector } from 'react-redux';

import products from '../../fakeData/products'

const SearchPage = () => {

    const textSearch = useSelector(state => state.textSearch);

    const productFiltered = products.filter(item => (
        textSearch === '' ? null : item.name.includes(textSearch)
    ))

  return (
    <Helmet title='Tìm Kiếm'>
        <div className='container-fluid search-page'>
            <div className='row search-page__title'>
                <h3>Tìm kiếm</h3>
                <p>Có {productFiltered ? productFiltered.length : 0} sản phẩm trong tìm kiếm</p>
                <span className='search-page__separate'></span>
            </div>
            <div className='row search-page__result'>
                <p>Kết quả tìm kiếm cho <span>"{textSearch}"</span></p>
            </div>
            <div className='row search-page__product-result'>
                {productFiltered.map((item, index) => (
                    <div key={index} className='col-6 col-lg-3'>
                        <ProductLayout item={item}/>
                    </div>
                ))}
            </div>
        </div>
    </Helmet>
  )
};

export default SearchPage;
