import React, {useContext} from 'react'
import {  RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import Servercontext from '../../context/Servercontext'
const Dispprjt = (props) => {
    const { Project,Open2,setOpen2,setProject2 } = props;
    const context = useContext(Servercontext);
    const {DeleteProject} = context;
    return (
        <article className='prjt__article'>
            <div>
                <h3>{Project.title}</h3>
                <small>{Project.tags}</small>
                <p>{Project.description}</p>
                <a href={Project.link1} style={{margin:'0 0.5rem'}} target="_blank" rel="noreferrer">GitHub</a>
                <a href={Project.link2} style={{margin:'0 0.5rem'}} target="_blank" rel="noreferrer">Live</a>
            </div>
                <RiDeleteBin6Line onClick={()=>{DeleteProject(Project._id)}} style={{cursor:'pointer',margin:'0.5rem'}}/>
                <FiEdit onClick={()=>{setOpen2(Open2^1);setProject2({uid:Project._id,utitle:Project.title,udescription:Project.description,utag:Project.tags,ulink1:Project.link1,ulink2:Project.link2})}} style={{cursor:'pointer',margin:'0.5rem'}}/>
        </article>
    )
}

export default Dispprjt