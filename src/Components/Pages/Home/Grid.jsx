import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Grid = () => {
  return (
    <div className="grid__container">
      <div className="grid grid-1">
        <h2>Television</h2>
        <p>& Audio</p>
        <FaArrowRight />
      </div>
      <div className="grid grid-2">
        <h2>Headphone</h2>
        <p>up to 35% off</p>
        <FaArrowRight />
      </div>
      <div className="grid grid-3">
        <h2>Computing</h2>
        <p>& Gaming -25%</p>
        <FaArrowRight />
      </div>
      <div className="grid grid-4">
        <h2>Mobile Phones</h2>
        <p>ejoy $50.00 off</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Grid;
