import React from 'react';
import CarCard from '../carCards/carCards';
import './carRental.scss'

const carData = [
  { imageSrc: '/images/bmw3series.png', price: '120', description: 'Bmw 3 series, Compact Executive Car, Various engine options (four-cylinder and six-cylinder) ' },
  { imageSrc: '/images/hondaAccord.png', price: '70', description: 'Honda Accord, Midsize Sedan, Four-cylinder and V6 engine options' },
  { imageSrc: '/images/FordFusion2015.png', price: '60', description: 'Ford Fusion, Midsize Sedan, Range of engines (four-cylinder and hybrid)' },
  { imageSrc: '/images/hyundaiSonata2014.png', price: '60', description: 'Hyundai Sonata, Midsize Sedan, Various engine options (four-cylinder and hybrid)' },
  { imageSrc: '/images/subaruLegacy2024.png', price: '60', description: 'Subaru Legacy, Midsize Sedan, Typically four-cylinder engine (often with all-wheel drive)' },
  { imageSrc: '/images/toyotaCamryn.png', price: '70', description: 'Toyota Camryn, Midsize Sedan, Various engine options (four-cylinder and V6)' },
  { imageSrc: '/images/volkswagenPassat.png', price: '60', description: 'Volkswagen Passat, Midsize Sedan, Usually turbocharged four-cylinder engines' },
  { imageSrc: '/images/nissanAltima.png', price: '70', description: 'Nissan Altima, Midsize Sedan, Typically four-cylinder engines (including turbocharged)' },
  { imageSrc: '/images/mazda6.png', price: '60', description: 'Mazda 6, Midsize Sedan, Typically four-cylinder engine' },

  // Add more car data as needed
];
function carRental() {
  return (
    <div className="car-subpage">
      {carData.map((car, index) => (
        <CarCard
          key={index}
          imageSrc={car.imageSrc}
          price={car.price}
          description={car.description}
        />
      ))}
    </div>
  );
}

export default carRental;