import React, { useState ,useContext } from 'react'
import Dispskill from './dispskill'
import './skll.css'
import Servercontext from '../../context/Servercontext'
const Skll = () => {
    const context = useContext(Servercontext);
    const { Skills,AddSkill,EditSkill } = context;
    const [skill, setSkill] = useState({title:"",tag:"",level:""});
    const [skill2, setSkill2] = useState({uid:"",utitle:"",utag:"",ulevel:""});
    const [Open, setOpen] = useState(false);
    const [Open2, setOpen2] = useState(false);
    const handleclick = (e) =>{
        e.preventDefault();
        AddSkill(skill.title,skill.tag,skill.level);
        setSkill({title:"",tag:"",level:""});
    }
    const handleclick2 = (e) =>{
        e.preventDefault(); 
        EditSkill(skill2.uid,skill2.utitle,skill2.utag,skill2.ulevel);
        setSkill2({uid:"",utitle:"",utag:"",ulevel:""});
    }
    const onChange = (e)=>{
        setSkill({...skill,[e.target.name]:e.target.value})
    }   
    const onChange2 = (e)=>{
        setSkill2({...skill2,[e.target.name]:e.target.value})
    }   

    return (
        <section id='skll'>
            <div style={{display: !Open?'none':''}} className="add__modal">
                <form className='AddSkill__form'>
                    <input type="text" formNoValidate name='title' value={skill.title}  onChange={onChange} placeholder='Enter Title' required />
                    <input type="text" formNoValidate name='tag' value={skill.tag}  onChange={onChange} placeholder='Tags' required />
                    <input type="text" formNoValidate name='level' value={skill.level} onChange={onChange} placeholder='Level' required />
                    <div className="button__handle">
                        <button type='submit' className='btn btn-primary' onClick={handleclick} >Submit</button>
                        <button type='submit' className='btn btn-primary' onClick={()=>{setOpen(Open^1)}}>Close</button>
                    </div>
                </form>
            </div>
            <div style={{display: !Open2?'none':''}} className="update__modal">
                <form className='update__skill'>
                    <input type="text" formNoValidate name='utitle' value={skill2.utitle} onChange={onChange2}  placeholder='Enter Title' required />
                    <input type="text" formNoValidate name='utag' value={skill2.utag} onChange={onChange2}  placeholder='Tags' required />
                    <input type="text" formNoValidate name='ulevel' value={skill2.ulevel} onChange={onChange2} placeholder='Level' required />
                    <div className="button__handle">
                        <button type='submit' className='btn btn-primary' onClick={handleclick2}>Submit</button>
                        <button type='submit' className='btn btn-primary' onClick={()=>{setOpen2(Open2^1)}}>Close</button>
                    </div>
                </form>
            </div>
            <h2>Skills</h2>
            <div className="container">
                <button type='submit' className='btn btn-primary' onClick={()=>{setOpen(Open^1)}}  > Add Skill</button>
                <div className="container skll__container">
                    {Skills.map((skill) => { return <Dispskill Open2={Open2} setOpen2={setOpen2} skill2={skill2} setSkill2={setSkill2} key={skill._id} skill={skill} /> })}
                </div>
            </div>
        </section>
    )
}
export default Skll