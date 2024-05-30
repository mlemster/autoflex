import { useState } from 'react'
import './header.scss'


function Header() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const toggleNavbar = () =>{
      if (window.innerWidth > 600) return;
        setIsNavExpanded(!isNavExpanded);
    }
    const body = document.body;
  
    isNavExpanded ? body.style.position = "fixed" : body.style.position = "relative" 
  return (
    <div className="wrapper">
      <nav className='navigation'>
          <a href="#home" className='site-name'>
          <img className='header-logo' src="/images/logo.svg" alt="" />
          </a>
          <button
            className="hamburger"
            onClick={toggleNavbar}
          >

              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
              >
              <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
              />
              </svg>  
          </button>
          <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
          <ul>
              <li>
                  <a href="/" onClick={toggleNavbar}>Home</a>
              </li>
              <li>
                  <a href="/#about" onClick={toggleNavbar}>About</a>
              </li>
              <li>
                  <a href="/#carselection" onClick={toggleNavbar}>Car rental</a>
              </li>
              <li>
                <a href="/Contact" onClick={toggleNavbar}>Contact</a>
              </li>
          </ul>
          </div>
      </nav>
    </div>
  )
}

export default Header