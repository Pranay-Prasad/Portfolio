import React from 'react'
import projects from '../resources/projects.json'
const DisplayWork = (props) => {
    const {project} = props;
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-img">
                <h2>{project.title}</h2>
                <small>{project.tags}</small>
            </div>
            <div className="portfolio__item-content">
                <p>{project.description}</p>
                <div className="portfolio__item_contentbtn">
                    <a href={project.link1} target="_blank" rel="noreferrer">Github</a>
                    <a href={project.link2} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </div>
        </article>
    )
}
export default DisplayWork