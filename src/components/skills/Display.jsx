import React  from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
const Display = (props) => {
    const { skill,tags } = props;
    
    if(skill.tag !== tags){
        return;
    }
    return (
        <article className='skills__details'>
            <BsCheckCircleFill className='skills__details_icon' />
            <div>
                <h4>{skill.title}</h4>
                <small className='text-light'>{skill.level}</small>
            </div>
        </article>
    )
}

export default Display