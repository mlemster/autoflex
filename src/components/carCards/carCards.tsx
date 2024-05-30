// CarCard.tsx
import React from 'react';
import PropTypes from 'prop-types';
import './carCards.scss';

interface CarCardProps {
  imageSrc: string;
  price: number;
  description: string;
}

function CarCard({ imageSrc, price, description }: CarCardProps) {
  return (
    <div className="car-card">
      <img className='cardkuva' src={imageSrc} alt="" />
      <p className="price">${price}</p>
      <p className="texti">{description}</p>
      <button><a href="/rentcar">Rent</a></button>
    </div>
  );
}

CarCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default CarCard;
