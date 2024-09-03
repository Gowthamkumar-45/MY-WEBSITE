import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className='topContent'>
        <div className="topContent__Container">
             <h1>Mr.Gowthaman</h1>
             <p>A Professional Web And App Developer</p>
             <a href='https://drive.google.com/file/d/1zQzq-JJwbWYnB7gnC7RJQUUnKih8ok_t/view?usp=drive_link' target='blank'>
                <button className="topContent__downloadButton">Download Cv</button>
             </a>
             <Link to="ProjectContainer" smooth ={true} duration={500}>
                <button  className="topContent_MyButton">My Work</button>
             </Link>
        </div>
    </div>
  )
}

export default TopContent
