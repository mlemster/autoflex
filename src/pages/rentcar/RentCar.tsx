import './rentcar.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import CarQuery from './elements/CarQuery/CarQuery';

function RentCar() {
    return(
        <>
        <Header />
        <CarQuery />
        <Footer />
        </>
    );
}

export default RentCar