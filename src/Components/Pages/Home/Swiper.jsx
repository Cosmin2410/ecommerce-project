import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperPage = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="swiper">
            <div className="swiper__text">
              <h3>Deal of the Day</h3>
              <h1>Great Deals. Every Day</h1>
              <p>EXPLORE / SHOP NOW</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper ">
            <div className="swiper__text swiper-2">
              <h3>from 250$</h3>
              <h1>Your Sleek Fitnes & Wellness Essential</h1>
              <p>EXPLORE / SHOP NOW</p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ... */}
      </Swiper>
    </>
  );
};
export default SwiperPage;
