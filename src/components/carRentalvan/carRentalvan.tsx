
import CarCard from '../carCards/carCards';
import './carRentalvan.scss'
const carData = [
  { imageSrc: '/images/sprinter.png', price: 300, description: 'Mercedes-Benz Sprinter, Engine options include a 2.0L 4-cylinder turbocharged gasoline engine and a 3.0L V6 turbo diesel.' },
  { imageSrc: '/images/NissanNv.png', price: 200, description: 'Nissan NV, Equipped with a powerful 5.6L V8 engine providing ample performance for towing and hauling. ' },
  { imageSrc: '/images/promaster.png', price: 200, description: 'Dodge Ram ProMaster, Comes with a 3.6L Pentastar V6 gasoline engine known for its reliability.' },
  { imageSrc: '/images/promasterCity.png', price: 150, description: 'Ram Promaster City, Features a smaller 2.4L Tigershark MultiAir 2 engine, suitable for its compact size.' },
  { imageSrc: '/images/Travato.png', price: 400, description: 'Winnebago Travato, Built on the Ram ProMaster chassis, it typically features the 3.6L Pentastar V6 engine.' },
  { imageSrc: '/images/savana.png', price: 220, description: 'GMC Savana, Offers V8 engine options, including a 6.0L Vortec V8 and a 2.8L Duramax turbo-diesel.' },
  { imageSrc: '/images/TransitPassenger.png', price: 300, description: 'Ford Transit Passenger Van, Engine options include a 3.5L V6, a 3.5L EcoBoost V6, and a 2.0L Turbocharged I4.' },
  { imageSrc: '/images/transit.png', price: 250, description: 'Ford Transit, Offers a variety of engine options, including EcoBoost V6 and diesel choices for different power and efficiency needs.' },
  { imageSrc: '/images/grandCalifornia.png', price: 350, description: 'Volkswagen Grand California, Typically equipped with a range of diesel engines, offering both power and fuel efficiency.' },
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