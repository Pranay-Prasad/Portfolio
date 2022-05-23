import React, {useContext} from 'react'
import './work.css'
import DisplayWork from './DisplayWork'
// import Servercontext from '../../context/Servercontext'
import projects from '../resources/projects.json'
const Work = () => {
  // const context = useContext(Servercontext);
  // const {Projects} = context;
  // projects.reverse();
  return (
    <section id='work'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project) => { return <DisplayWork key={project._id} project={project} /> })}
      </div>
      <div className='container seemore'>
        <a href="https://github.com/Pranay-Prasad?tab=repositories" target="_blank" rel="noreferrer">See More...</a>
      </div>
    </section>
  )
}
export default Work