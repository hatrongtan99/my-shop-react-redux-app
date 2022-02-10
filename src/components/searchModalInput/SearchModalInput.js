import React, { useState } from 'react';
import './searchModalInput.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/actions'

const SearchModalInput = ({openModalSearch, setOpenModalSearch}) => {

    const dispatch = useDispatch();

    const [ textSearch, setTextSearch ] = useState(null);

    const handleTextSearch = () => {
        dispatch(searchProduct(textSearch));
        setOpenModalSearch(!openModalSearch);
        setTextSearch(null)
    }

  return (
      <div className="modal-search" onClick={() => setOpenModalSearch(!openModalSearch)}>
          <div className='modal-search__container' onClick={(e) => e.stopPropagation()}>
              <div className='modal-search__title'>
                  TÌM KIẾM
              </div>
            <div className='modal-search__close' onClick={() => setOpenModalSearch(!openModalSearch)}>
                <i className="fas fa-times"></i>
            </div>
            <div className='modal-search__input'>
                <input type='text' placeholder='Tìm kiếm sản phẩm...' onChange={(e) => setTextSearch(e.target.value)} ></input>
                <div className='modal-search__input__icon' onClick={handleTextSearch}>
                    <Link to='/search'><i className="fas fa-search" ></i></Link>
                </div>
            </div>
          </div>
      </div>
  )
};

export default SearchModalInput;
