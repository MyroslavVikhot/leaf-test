import React from 'react';

import './Cookie.scss';
import leafLeft from '../../assets/img/leafLeft.png';
import leafRight from '../../assets/img/leafRight.png';
import closeCookie from '../../assets/icons/close.png'

const Cookie = ({onCloseCookie}) => {
    return (
        <div className="cookie">
            <img src={leafLeft} alt="leaf" className="leaf leaf__left" />
            <img src={leafRight} alt="leaf" className="leaf leaf__right" />
            <img 
                src={closeCookie} 
                alt="leaf" 
                className="cookie__close" 
                onClick={onCloseCookie}
            />
            <div className="cookie__title">
                COOKIE POLICY
            </div>
            <div className="cookie__text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
            </div>
            <div className="cookie__readmore">
                <a href="#">
                    READ MORE {'>'}
                </a>
            </div>
            <button 
                className="cookie__btn"
                onClick={onCloseCookie}
            >
                OKAY, I GOT IT!
            </button>
        </div>
    )
}

export default Cookie;
