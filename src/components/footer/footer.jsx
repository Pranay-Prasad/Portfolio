import React from 'react'
import './footer.css'
import {FaFacebookSquare,FaTwitterSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>PRANAY PRASAD</a>
        <ul className='links'>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__social">
            <a href="https://www.facebook.com/pranay.prasad.9277"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/pranay.prasad/"><BsInstagram/></a>
            <a href="https://twitter.com/PranayP19841306"><FaTwitterSquare/></a>
        </div>
        <div className="footer__copyright">
            <small>&copy;Pranay Prasad.All rights reserved</small>
        </div>
    </footer>
  )
}

export default footer