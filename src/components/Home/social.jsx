import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const social = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pranayprasad42" target="_blank" rel="noreferrer"><BsLinkedin/></a>        
        <a href="https://github.com/Pranay-Prasad" target="_blank" rel="noreferrer"><BsGithub/></a>        
        <a href="https://www.instagram.com/pranay.prasad/" target="_blank" rel="noreferrer"><BsInstagram/></a>        
    </div>
  )
}

export default social