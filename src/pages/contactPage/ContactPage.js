import React from 'react';
import './contactPage.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from '../../components'

const ContactPage = () => {

  const contactMenu = [
    {
      display: 'find product',
      path: '/search'
    },
    {
      display: 'about us',
      path: '/pages/about-us'
    },
    {
      display: 'blog',
      path: '/blog/kien-thuc-thoi-trang'
    },
    {
      display: 'privacy policy',
      path: '/'
    },
    {
      display: 'poicy guide',
      path: '/pages/chinh-sach-doi-tra'
    },
    {
      display: 'contact',
      path: '/contact'
    }
  ]

  const [ showSideBar, setShowSideBar ] = useState(false)


  return (
    <>
      <Helmet title='Liên Hệ'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">CONTACT</li>
          </ol>
        </nav>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <div className={`sidebar-page ${showSideBar ? 'onclick' : ''}`} onClick={() => setShowSideBar(!showSideBar)}>
                <div className='sidebar-page__title'>
                  <h3>DANH MỤC TRANG</h3>
                  <span></span>
                </div>
                <ul className='sidebar-page__menu'>
                  {contactMenu.map((item, index) => (
                    <Link key={index} to={item.path}><li className='sidebar-page__menu__item'>{item.display}</li></Link>
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-12 col-lg-9'>
              <div className='contact-page-wraper'>
                <div className='contact-info__address'>
                  <div className='contact-page__title'>
                      <h2>HỆ THỐNG CỬA HÀNG</h2>
                      <span></span>
                  </div>
                  <div className='contact-info'>
                    <h3 className='contact-info__title'>BAD HABITS</h3>
                    <h5>CHI NHÁNH HỒ CHÍ MINH:</h5>
                    <p>
                      117 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1
                      <br/>
                      93 Rạch Bùng Binh, Phường 9, Quận 3
                      <br/>
                      26 Lý Tự Trọng, Phường Bến Nghé, Quận 1
                      <br/>
                      350 Điện Biên Phủ, Phường 9, Quận Bình Thạnh
                    </p>
                    <span>---</span>
                    <h5>CHI NHÁNH HÀ NỘI:</h5>
                      <p>Tầng 7 Vincom Bà Triệu, Hai Bà Trưng</p>
                      <span>---</span>
                    <h5>CHI NHÁNH CẦN THƠ:</h5>
                    <p>7 Trần Văn Hoài, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</p>
                  </div>
                  <div className='contact-info'>
                    <h3 className='contact-info__title'>BAD RABBIT</h3>
                    <h5>CHI NHÁNH HỒ CHÍ MINH:</h5>
                      <p>
                        117 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1
                        <br/>
                        93 Rạch Bùng Binh, Phường 9, Quận 3
                        <br/>
                        26 Lý Tự Trọng, Phường Bến Nghé, Quận 1
                        <br/>
                        57 Nguyễn Gia Trí (D2), Phường 25, Quận Bình Thạnh
                      </p>
                    <h5>CHI NHÁNH CẦN THƠ:</h5>
                      <p>7 Trần Văn Hoài, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</p>

                  </div>
                </div>
                <div className='contact-info__detail'>
                  <h6>* LIÊN HỆ HỖ TRỢ ONLINE:</h6>
                  <p className='contact-info__time-work'>Giờ làm việc: <span>10A.M - 10P.M</span></p>
                  <p>
                    0907.799.384 - 0902.638.020 - 0931.610.291
                    <br/>
                    Badhabits95.store@gmail.com
                    <br/>
                    Badrabbitclub@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Helmet>
    </>
  )
};

export default ContactPage;
