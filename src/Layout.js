import React from 'react';
import { Header, Footer, ModalCart } from './components';
import SwitchPages from './routes/SwitchPages';
import { useSelector } from 'react-redux';

const Layout = () => {

  const toggleCartModal = useSelector((state) => state.toggleCartModal)

  return (
    <div className='main'>
      <Header/>
      <SwitchPages/>
      <Footer />
      { toggleCartModal && <ModalCart/> }
    </div>
  )
};

export default Layout;

