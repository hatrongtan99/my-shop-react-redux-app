import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import ModalHeader from '../modalHeader/ModalHeader'

const shopNav = [
  {
    display: 'tops',
    path: '/collections/tops'
  },
  {
    display: 'bottoms',
    path: '/collections/bottoms'
  },
  {
    display: 'accessories',
    path: '/collections/accesories'
  },
  {
    display: 'end season',
    path: '/collections/end-season'
  }
];

const badHabitsNav = [
  {
    display: 'all',
    path: '/collections/shirt'
  },
  {
    display: 't-shirt',
    path: '/collections/t-shirt'
  },
  {
    display: 'outerwear',
    path: '/collections/outerwear'
  },
  {
    display: 'hoodies',
    path: '/collections/hoodies'
  },
  {
    display: 'short & paint',
    path: '/collections/short-&-paint'
  },
  {
    display: 'accessories',
    path: '/collections/accessories-habits'
  },
  {
    display: 'social',
    path: '/collections/social'
  }
]

const badRabbitClub = [
  {
    display: 'all',
    path: '/collections/all-rabbit'
  },
  {
    display: 't-shirt',
    path: '/collections/t-shirt-rabbit'
  },
  {
    display: 'shirt',
    path: '/collections/shirt-rabbit'
  },
  {
    display: 'outerwear',
    path: '/collections/outerwear-habits'
  },
  {
    display: 'social',
    path: '/collections/social-habits'
  }
]

const remakeCollectionNav = [
  {
    display: 'hàng rong',
    path: '/collections/hang-rong'
  },
  {
    display: 'sửa xe',
    path: '/collections/sua-xe'
  },
  {
    display: 'trà đá',
    path: '/collections/trà đá'
  }
]

const contactNav = [
  {
    display: 'journal',
    path: '/collections/journal'
  }
]


const Navbar = ({openModal, setOpenModal}) => {
  return (
    <>
      <ul className='header__navbar'>
        <Link to='/collections/all' >
          <li className='header__navbar__item'>shop
            <i className="fa fa-chevron-down"></i>
          
            <ul className='header__navbar__item__sub'>
              {shopNav.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li>{item.display}</li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>

        <Link to='/collections/all-product' >
          <li className='header__navbar__item'>bad habits
            <i className="fa fa-chevron-down"></i>

            <ul className='header__navbar__item__sub'>
              {badHabitsNav.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li>{item.display}</li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>

        <Link to='/collections/club' >
          <li className='header__navbar__item'>bad rabbit club
            <i className="fa fa-chevron-down"></i>

            <ul className='header__navbar__item__sub'>
              {badRabbitClub.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li>{item.display}</li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>

        <Link to='/collections/remake-collection' >
          <li className='header__navbar__item'>remake collection
            <i className="fa fa-chevron-down"></i>

            <ul className='header__navbar__item__sub'>
              {remakeCollectionNav.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li>{item.display}</li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>

        <Link to='/contact' >
          <li className='header__navbar__item'>contact
            <i className="fa fa-chevron-down"></i>

            <ul className='header__navbar__item__sub'>
              {contactNav.map((item, index) => (
                <Link key={index} to={item.path}>
                  <li>{item.display}</li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>
      </ul>
      {openModal && <ModalHeader 
        shopNav={shopNav}
        badHabitsNav={badHabitsNav}
        badRabbitClub={badRabbitClub}
        remakeCollectionNav={remakeCollectionNav}
        contactNav={contactNav}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />}
      
    </> 
  )
};

export default Navbar;
