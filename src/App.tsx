import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import VanRental from './pages/vanRental/vanRental'
import RentCar from './pages/rentcar/RentCar';
import Rental from './pages/Rental/Rental'
import Tos from './pages/tos/Tos';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Eula from './pages/eula/Eula';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
          />
        <Route 
          path='/contact'
          element={<Contact />}
        />
        <Route 
          path='/Home/:about'
          Component={Home}
        />
        <Route 
          path='/passengercars'
          element={<Rental />}
        />
        <Route 
          path='/vans'
          element={<VanRental />}
        />
        <Route 
          path='/rentcar'
          element={<RentCar />}
        />

        <Route 
        path='/tos'
        element={<Tos />}
        />

        <Route 
        path='/eula'
        element={<Eula />}
        
        />

        <Route 
        path='/privacypolicy'
        element={<PrivacyPolicy />}
        />
      </Routes>
    </Router>
  )
}


export default App
