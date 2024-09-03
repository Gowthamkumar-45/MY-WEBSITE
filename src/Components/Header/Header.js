import React from 'react'
import {Link} from "react-scroll";
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
    <div className='header__left'>
      <h1>
        develop<span>er</span>
      </h1>
    </div>
    <div className='header__right'>
    <Link to="about" smooth={true} duration={500}>
      <h3>
        About Me
      </h3>
    </Link>
    <Link to="skills" smooth={true} duration={500}>
      <h3>
        Skills
      </h3>
    </Link>
    <Link to="Projects" smooth={true} duration={500}>
      <h3>
        Projects
      </h3>
    </Link>
    <Link to="experience" smooth={true} duration={500}>
      <h3>
        Experience
      </h3>
    </Link>
    <Link to="contact" smooth={true} duration={500}>
      <h3>
        Contact
      </h3>
    </Link>
    <h3 className="right__button">join with me</h3>
    </div>
  </div>
  )
}

export default Header
