import { useState, useEffect } from 'react';
import './carquery.scss';

function CarQuery() {
  const [selectedDays, setSelectedDays] = useState(1);
  const [totalCost, setTotalCost] = useState(60);

  useEffect(() => {
    setTotalCost(selectedDays * 60);
  }, [selectedDays]);

  return (
    <>
      <section id='carquery'>
        <div className="query-wrapper">
          <form action="submit" className='carquery-form'>
            <div className="form-content">
              <h1>Use the slider to choose how many days the car will be in use</h1>

              <p>Selected days: {selectedDays}</p>

              <div className="slider">
                <input
                  defaultValue={1}
                  type="range"
                  min={1}
                  max={30}
                  className='vdjasidja'
                  onChange={e => setSelectedDays(parseInt(e.target.value))}
                />
              </div>

              <input
                type="text"
                className='basicinfo'
                placeholder='Enter your first name...'
              />

              <input
                type="text"
                className='basicinfo'
                placeholder='Enter your surname...'
              />
              <input
                type="email"
                className='basicinfo'
                placeholder='Enter your email...'
              />
              <input
                type="tel"
                className='basicinfo'
                placeholder='Enter your phone number...'
              />

              <div>
                <h1>Your total: <br /> <span id="totalcost">{totalCost}€</span></h1>
              </div>
              <button className='submit-button'>
                Rent
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CarQuery;
