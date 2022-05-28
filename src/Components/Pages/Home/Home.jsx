import React from 'react';
import SwiperPage from './Swiper';
import { FaHeadset, FaRocket, FaGift, FaLock } from 'react-icons/fa';
import Grid from './Grid';

const Home = () => {
  return (
    <div>
      <SwiperPage />

      <div className="offer__container">
        <div className="offer__icon">
          <FaHeadset />
          <p>Exceptional customer care & 24-hour live chat.</p>
        </div>

        <div className="offer__icon">
          <FaRocket />
          <p>Free shipping & returns. Every single order.</p>
        </div>
        <div className="offer__icon">
          <FaGift />
          <p>Become an Alysum Friend & enjoy lots of benefits.</p>
        </div>
        <div className="offer__icon">
          <FaLock />
          <p>Secure payment. Visa, Mastercard.</p>
        </div>
      </div>

      <Grid />
    </div>
  );
};

export default Home;
