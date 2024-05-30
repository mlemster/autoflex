import './about.scss'


function About() {
    return(
        <section id="about" >
            <div className='about'>
                <img className='about-bg' src="/images/about.svg" alt=""/>
                <div className='background-overlay'>
                    <div className="about-content">
                        <div className="about-items-top">
                            <div className="about-header">
                                <img className='about-logo' src="/images/logo.svg" alt=""/>
                                <h1 className='about-phrase'>Where flexibility meets the open road</h1>
                            </div>
                            
                            <div className="about-top-text">
                                <h1>
                                    Need a last-minute rental? <br/> No worries – we've got you covered
                                </h1>
                                <h2>
                                    Booking with AutoFlex is a breeze. 
                                    Our user-friendly website allows you to
                                    browse our diverse selection, book with
                                    ease, and manage your servations effortlessly.
                                </h2>
                            </div>
                        </div>

                        <div className="about-items-bottom">
                            <h1>
                                Why AutoFlex?
                            </h1>
                            <p>
                                We're not just a car rental company; we're 
                                your travel partner committed to making your trips memorable. 
                                Our modern and well-maintained vehicles ensure a reliable and 
                                comfortable ride.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About