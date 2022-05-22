import React from 'react'
import './skills.css'
import Display from './Display'
// import Servercontext from '../../context/Servercontext'
import skills from '../resources/skills.json'
const Skills = () => {
  // const context = useContext(Servercontext);
  // const { Skills } = context;
  return (

    <section id='skills'>
      <h5>Questioning My abality?</h5>
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            {skills.map((skill) => { return <Display tags={"Frontend"} key={skill._id} skill={skill} /> })}
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            {skills.map((skill) => { return <Display tags={"Backend"} key={skill._id} skill={skill} /> })}
          </div>
        </div>
        <div className="skills__other">
          <h3>Others</h3>
          <div className="skills__content">
            {skills.map((skill) => { return <Display tags={"other"} key={skill._id} skill={skill} /> })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills