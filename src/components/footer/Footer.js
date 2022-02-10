import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import bct from '../../assets/bct.webp';
import mastercard from '../../assets/mastercard.webp';
import paypal from '../../assets/paypal.webp';
import visa from '../../assets/visa.webp';


const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className='row g-0'>
        <div className='col scm__btn'>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className='row web__info g-0'>
        <div className='col-6 col-sm-6 col-md-2'>
          <ul className='web__info__pages'>
            <li>
              <Link to='/collections/all'>
                shop
              </Link>
            </li>
            <li>
              <Link to='/collections/all-product'>
                bad habits
              </Link>
            </li>
            <li>
              <Link to='/collections/club'>
                bad rabbit club
              </Link>
            </li>
            <li>
              <Link to='/collections/remake-collection'>
                remake collection
              </Link>
            </li>
            <li>
              <Link to='/collections/contact'>
              contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-6 col-sm-6 col-md-2'>
          <ul className='web__info__pages'>
            <li>find product</li>
            <li>about us</li>
            <li>blog</li>
            <li>privacy policy</li>
            <li>policy guide</li>
            <li>contact</li>
          </ul>
        </div>
        
        <div className='col offset-md-3'>
          <div className='web__info__address'>
            <h6>DOUBLE BAD LIMITED LIABILITY COMPANY</h6>
            <span>ADDRESS:</span>

            <ul>
              <li>STORE 1: 93 RẠCH BÙNG BINH,PHƯỜNG 9, QUẬN 3</li>
              <li>STORE 2: 117 TRẦN ĐÌNH XU, PHƯỜNG NGUYỄN CƯ TRINH, QUẬN 1</li>
              <li>STORE 3: 350 ĐIỆN BIÊN PHỦ, PHƯỜNG 17, QUẬN BÌNH THẠNH</li>
              <li>STORE 4: 57 NGUYỄN GIA TRÍ PHƯỜNG 25, QUẬN BÌNH THẠNH</li>
              <li>STORE 5: 26 LÝ TỰ TRỌNG, PHƯỜNG BẾN NGHÉ, QUẬN 1</li>
              <li>STORE 6: VINCOM BÀ TRIÊU TẦNG 7, BOOTH 28, HÀ NỘI</li>
              <li>STORE 7: 7 TRẦN VĂN HOÀI, PHƯỜNG XUÂN KHÁNH, QUẬN NINH KIỀU, CẦN THƠ</li>
            </ul>
            <p className='web__info__address__contact'>
              HOTLINE:
              <span> 0902.638.020 - 0931.610.291</span>
            </p>
            <p className='web__info__address__contact'>
              EMAIL:
              <span> BADHABITS95.STORE@GMAIL.COM BADHABITS.MANAGER@GMAIL.COM</span>
            </p>
          </div>
        </div>
      </div>
      <div className='row wrap__pay g-0'>
        <ul className='col col-sm-6 pay__info'>
          <li><img className='pay__info__bct' src={bct} alt=''/></li>
          <li><img src={paypal} alt=''/></li>
          <li><img src={visa} alt=''/></li>
          <li><img src={mastercard} alt=''/></li>
        </ul>
        <div className='col col-sm-6 footer__copyright'>
          <p>2022 © Bad Habits Store Official®</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
