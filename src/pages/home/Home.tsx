import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import CarSelection from "../../components/carselection/CarSelection";

function Home() {
    return(
        <>
        <Header />
        <Landing />
        <About />
        <CarSelection />
        <Footer />
        </>
    );
}

export default Home;