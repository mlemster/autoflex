import './landing.scss'
function Landing() {
  return (
    <section id='landing'>
      <div className="landing-image-container">
        <img src="/images/landing.svg" className='landing-bg-image' alt="" />
        <div className='background-overlay'>
        </div>
        <div className='landing-container'>
          <img src="/images/logo.svg" alt="" className='landing-logo'/>
          <h1>Your Journey, Our Passion – AutoFlex</h1>
        </div>
      </div>
    </section>
  )
}

export default Landing