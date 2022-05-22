import React, {useRef, useState } from 'react'
import './Home.css'
import CTA from './CTA'
import Social from './social'
import { FaPlay,FaPause } from 'react-icons//fa'
import ad from './music.mp3';
const Home = () => {
  const audioplayer = useRef();
  const [Music, setMusic] = useState(false)
  const handleclick = () =>{
    const prevvalue = Music;
    setMusic(!prevvalue);
    if(prevvalue){
      audioplayer.current.pause();
    }
    else{
      audioplayer.current.play();
    }
  }
  return (
    <header>
      <div className="container header__container">
        <audio ref = {audioplayer} src={ad} id='music_section'></audio>
        <div className="music">
          <h2 style={{color: 'var(--color-primary)',margin:'0.8rem'}}>Music</h2>
          <button onClick={handleclick} >
            {Music?<FaPause className='music__icon'/>:<FaPlay  className='music__icon' />}
          </button>
        </div>
        <div className="info">
          <h5>Hi,</h5>
          <h1>I'm Pranay Prasad</h1>
          <h4>Fullstack Developer</h4>
          <CTA />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <Social />
      </div>
    </header>
  )
}

export default Home