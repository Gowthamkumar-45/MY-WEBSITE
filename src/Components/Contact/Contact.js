import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className="Contact" id="contact">
      <h1>Contact</h1>
      <div className='Contact__container'>
        <p>
            Email : <span>Gowthamtech11@gmail.com</span>
        </p>
        <p>
            GitHub UserName : <span>@Gowthamkumar-45</span>
        </p>
        <div className='Contact__icons'>
          <a href='www.linkedin.com/in/gowtham-m-a50a79267'> 
            <IconButton>
                <LinkedIn />
            </IconButton>
          </a>
          <a href='google.com'> 
            <IconButton>
                <Facebook/>
            </IconButton>
          </a>
          <a href='google.com'> 
            <IconButton>
                <Instagram/>
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  )
}

export default Contact
