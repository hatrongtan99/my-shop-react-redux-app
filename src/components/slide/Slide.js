import React, { useState } from 'react';
import './slide.css'
import { slideShow1, slideShow2, slideShow3, slideShowMb1, slideShowMb2, slideShowMb3 } from '../../assets/slide';

const Slide = () => {
    const [ slideImg, setSlideImg ] = useState(slideShow1);
    const [ slideImgMb, setSlideImgMb ] = useState(slideShowMb1);
    const [ addActive, setAddActive ] = useState('1');
    const [ addActiveMb, setAddActiveMb ] = useState('1');

    const handleAddActive = (slide, num) => {
        setSlideImg(slide)
        setAddActive(num)
    }

    const handleAddActiveMb = (slide, num) => {
        setSlideImgMb(slide)
        setAddActiveMb(num)
    }

    return (
    <div className='main-slide'>
        <div className='main-slide__img d-sm-block hiden-in-mobile'>
            <img src={slideImg} alt='' />

            <div className='main-slide__img__control'>
                <div className={`main-slide__img__item ${addActive === '1' ? 'active' : ''}`} onClick={() => handleAddActive(slideShow1, '1')}>
                    <span></span>
                </div>
                <div className={`main-slide__img__item ${addActive === '2' ? 'active' : ''}`} onClick={() => handleAddActive(slideShow2, '2')}>
                    <span></span>
                </div>
                <div className={`main-slide__img__item ${addActive === '3' ? 'active' : ''}`} onClick={() => handleAddActive(slideShow3, '3')}>
                    <span></span>
                </div>
            </div>

        </div>
        <div className='main-slide__img d-sm-none show-in-mobile'>
            <img src={slideImgMb} alt='' />

            <div className='main-slide__img__control'>
                <div className={`main-slide__img__item ${addActiveMb === '1' ? 'active' : ''}`} onClick={() => handleAddActiveMb(slideShowMb1, '1')}>
                    <span></span>
                </div>
                <div className={`main-slide__img__item ${addActiveMb === '2' ? 'active' : ''}`} onClick={() => handleAddActiveMb(slideShowMb2, '2')}>
                    <span></span>
                </div>
                <div className={`main-slide__img__item ${addActiveMb === '3' ? 'active' : ''}`} onClick={() => handleAddActiveMb(slideShowMb3, '3')}>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Slide;
