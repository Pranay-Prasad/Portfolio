import React from 'react'
import './About.css'
import Codeprofile from './codeprofile'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <p>I'm a Full-Stack developer located in India. I have interest in Competitive Programming and Problem solving. <br /></p>
          <p>Well-organised and practical person, Problem solver. Fan of Elon Musk, Outdoor activities, Webseries and finance education. An Introvert Person who likes to talk about technologies and new Ideas. <br /></p>
          <p>Interested in Exploring the entire development spectrum and working on ambitious Projects with positive people.</p>
        </div>
        <div className="about__profile">
          <h2>Coding Profiles</h2>
          <Codeprofile/>
        </div>
      </div>
    </section>
  )
}

export default About