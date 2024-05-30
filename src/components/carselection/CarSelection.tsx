import './carselection.scss'
function CarSelection () {
    return (
        <>
        <section id="carselection">
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="homo">
                    <div className="banner-image1"> </div>
                        <h1> Passenger cars</h1>
                        <p>Passenger cars all <br/>
                           around the world </p>
                        </div>
                        <div className="button-wrapper">
                        <button className="btn outline"><a href="/passengercars">View more</a></button>
                        </div>
                </div>
                
                <div className="card-container">
                    <div className="homo">
                    <div className="banner-image2"> </div>
                        <h1>Vans</h1>
                        <p>Vans all around <br/>
                            the  world</p>
                        </div>
                        <div className="button-wrapper">
                        <button className="btn outline"><a href="/vans">View more</a></button>
                        </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default CarSelection;