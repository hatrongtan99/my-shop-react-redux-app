import React, { useState } from 'react';
import './modalHeader.css';
import { Link } from 'react-router-dom';

const ModalHeader = ({
  shopNav,
  badHabitsNav,
  badRabbitClub,
  remakeCollectionNav,
  contactNav,
  openModal,
  setOpenModal
}) => {

  const [ navbarItemSub1, setNavbarItemSub1 ] = useState(false)
  const handleShowNavbarItemSub1 = () => {
    setNavbarItemSub1(!navbarItemSub1)
  }

  const [ navbarItemSub2, setNavbarItemSub2 ] = useState(false)
  const handleShowNavbarItemSub2 = () => {
    setNavbarItemSub2(!navbarItemSub2)
  }

  const [ navbarItemSub3, setNavbarItemSub3 ] = useState(false)
  const handleShowNavbarItemSub3 = () => {
    setNavbarItemSub3(!navbarItemSub3)
  }

  const [ navbarItemSub4, setNavbarItemSub4 ] = useState(false)
  const handleShowNavbarItemSub4 = () => {
    setNavbarItemSub4(!navbarItemSub4)
  }

  const [ navbarItemSub5, setNavbarItemSub5 ] = useState(false)
  const handleShowNavbarItemSub5 = () => {
    setNavbarItemSub5(!navbarItemSub5)
  }


    return (
    <div className='modal__header' onClick={() => setOpenModal(!openModal)}> 
      
      <div className='modal__header__menu' onClick={(e) => e.stopPropagation()}>
        <div className='modal__header__close' >
          <i className="fas fa-times" onClick={() => setOpenModal(!openModal)}></i>
        </div>
        <span>Menu</span>
        {/* modal header navbar */}
        <ul className='modal__header__navbar'>

          <div className='modal__header__navbar__click'>
            <Link to='/collections/all'>
              <li className='modal__header__navbar__item' onClick={() => setOpenModal(!openModal)}>
                shop
                { navbarItemSub1 && 
                  <ul className='modal__header__navbar__item__sub'>
                    {shopNav.map((item, index) => (
                      <li key={index} onClick={() => setOpenModal(!openModal)}>
                        <Link to={item.path}>
                          {item.display}
                        </Link>
                      </li>
                    ))}
                  </ul>}
                
              </li>
            </Link>
              <i className="fa fa-chevron-down" onClick={handleShowNavbarItemSub1}></i>
          </div>

          <div className='modal__header__navbar__click'>
            <Link to='/collections/all-product'>
              <li className='modal__header__navbar__item' onClick={() => setOpenModal(!openModal)}>
              bad habits
              { navbarItemSub2 && 
                <ul className='modal__header__navbar__item__sub'>
                    {badHabitsNav.map((item, index) => (
                      <li key={index} onClick={() => setOpenModal(!openModal)}>
                        <Link to={item.path}>
                          {item.display}
                        </Link>
                      </li>
                    ))}
                  </ul>}
              </li>
            </Link>
              <i className="fa fa-chevron-down" onClick={handleShowNavbarItemSub2}></i>
          </div>

          <div className='modal__header__navbar__click'>
            <Link to='/collections/club'>
              <li className='modal__header__navbar__item' onClick={() => setOpenModal(!openModal)}>
              bad rabbit club
                { navbarItemSub3 && 
                  <ul className='modal__header__navbar__item__sub'>
                    {badRabbitClub.map((item, index) => (
                      <li key={index} onClick={() => setOpenModal(!openModal)}>
                        <Link to={item.path}>
                          {item.display}
                        </Link>
                      </li>
                    ))}
                  </ul>}
              </li>
            </Link>
              <i className="fa fa-chevron-down" onClick={handleShowNavbarItemSub3}></i>
          </div>

          <div className='modal__header__navbar__click'>
            <Link to='/collections/remake-collection'>
              <li className='modal__header__navbar__item' onClick={() => setOpenModal(!openModal)}>
              remake collection
                { navbarItemSub4 && 
                  <ul className='modal__header__navbar__item__sub'>
                    {remakeCollectionNav.map((item, index) => (
                      <li key={index} onClick={() => setOpenModal(!openModal)}>
                        <Link to={item.path}>
                          {item.display}
                        </Link>
                      </li>
                    ))}
                  </ul>}
              </li>
            </Link>
              <i className="fa fa-chevron-down" onClick={handleShowNavbarItemSub4}></i>
          </div>

          <div className='modal__header__navbar__click'>
            <Link to='/collections/contact'>
              <li className='modal__header__navbar__item' onClick={() => setOpenModal(!openModal)}>
              contact
                { navbarItemSub5 && 
                  <ul className='modal__header__navbar__item__sub'>
                    {contactNav.map((item, index) => (
                      <li key={index} onClick={() => setOpenModal(!openModal)}>
                        <Link to={item.path}>
                          {item.display}
                        </Link>
                      </li>
                    ))}
                  </ul>}
              </li>
            </Link>
              <i className="fa fa-chevron-down" onClick={handleShowNavbarItemSub5}></i>
          </div>
        </ul>
        <ul className='modal__header__link'>
          <li>find product</li>
          <li>about us</li>
          <li>blog</li>
          <li>privacy policy</li>
          <li>policy guide</li>
          <li>contact</li>
        </ul>
        <div className='modal__login'>
          <i className="fas fa-user-circle"></i>
          <a href="#">Đăng nhập</a>
        </div>
      </div>
    </div>
  )
};

export default ModalHeader;
