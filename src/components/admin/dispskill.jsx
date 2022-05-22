import React, { useContext } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import {  RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import Servercontext from '../../context/Servercontext'
const Dispskill = (props) => {
    const context = useContext(Servercontext); 
    const {Deleteskill} = context;
    const { skill,Open2,setOpen2,setSkill2 } = props;
    return (
        <div>
            <article>
                <BsCheckCircleFill className='skills__details_icon' />
                <div>
                    <h4>{skill.title}</h4>
                    <small className='text-light'>{skill.level}</small>
                    <RiDeleteBin6Line onClick={()=>{Deleteskill(skill._id)}}  style={{ cursor: "pointer" }} />
                    <FiEdit onClick={()=>{setOpen2(Open2^1);setSkill2({uid: skill._id,utitle: skill.title,utag:skill.tag,ulevel:skill.level})}} style={{ cursor: "pointer" }} />
                </div>
            </article>
        </div>
    )  
}

export default Dispskill