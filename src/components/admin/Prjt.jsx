import React, { useContext, useState } from 'react'
import Servercontext from '../../context/Servercontext'
import Dispprjt from './Dispprjt';
import './Prjt.css'
const Prjt = () => {
  const context = useContext(Servercontext);
  const { Projects, AddProjects,EditProject } = context;
  const [Project, setProject] = useState({ title: "", description: "", tag: "", link1: "", link2: "" });
  const [Project2, setProject2] = useState({ uid:"",utitle: "", udescription: "", utag: "", ulink1: "", ulink2: "" });
  const [Open, setOpen] = useState(false)
  const [Open2, setOpen2] = useState(false)
  const handleclick = (e) => {
    e.preventDefault();
    AddProjects(Project.title, Project.description, Project.tag, Project.link1, Project.link2);
    setProject({title: "", description: "", tag: "", link1: "", link2: "" });
  }
  const handleclick2 = (e) => {
    e.preventDefault();
    EditProject(Project2.uid,Project2.utitle, Project2.udescription, Project2.utag, Project2.ulink1, Project2.ulink2);
    setProject2({ uid:"",utitle: "", udescription: "", utag: "", ulink1: "", ulink2: "" });
  }
  const onChange = (e) => {
    setProject({ ...Project, [e.target.name]: e.target.value })
  }
  const onChange2 = (e) => {
    setProject2({ ...Project2, [e.target.name]: e.target.value })
  }
  return (
    <section id='prjt'>
      <div style={{ display: !Open ? 'none' : '' }} className="add__modal">
        <form className='AddSkill__form'>
          <input type="text" formNoValidate name='title' value={Project.title} onChange={onChange} placeholder='Enter Title' required />
          <input type="text" formNoValidate name='tag' value={Project.tag} onChange={onChange} placeholder='Tags' required />
          <input type="link" formNoValidate name='link1' value={Project.link1} onChange={onChange} placeholder='Github Link' required />
          <input type="link" formNoValidate name='link2' value={Project.link2} onChange={onChange} placeholder='Live Link' required />
          <textarea name="description" id="desc" cols="30" value={Project.description} rows="10" onChange={onChange} placeholder='Enter Description'></textarea>
          <div className="button__handle">
            <button type='submit' className='btn btn-primary' onClick={handleclick} >Submit</button>
            <button type='submit' className='btn btn-primary' onClick={() => { setOpen(Open ^ 1) }}>Close</button>
          </div>
        </form>
      </div>
      <div style={{ display: !Open2 ? 'none' : '' }} className="add__modal">
        <form className='AddSkill__form'>
          <input type="text" formNoValidate name='utitle' value={Project2.utitle} onChange={onChange2} placeholder='Enter Title' required />
          <input type="text" formNoValidate name='utag' value={Project2.utag} onChange={onChange2} placeholder='Tags' required />
          <input type="link" formNoValidate name='ulink1' value={Project2.ulink1} onChange={onChange2} placeholder='Github Link' required />
          <input type="link" formNoValidate name='ulink2' value={Project2.ulink2} onChange={onChange2} placeholder='Live Link' required />
          <textarea formNoValidate name="udescription" id="desc" cols="30" rows="10" value={Project2.udescription} onChange={onChange2} placeholder='Enter Description'></textarea>
          <div className="button__handle">
            <button type='submit' className='btn btn-primary' onClick={handleclick2} >Submit</button>
            <button type='submit' className='btn btn-primary' onClick={() => { setOpen2(Open2 ^ 1) }}>Close</button>
          </div>
        </form>
      </div>

      <h2>Projects</h2>
      <div className="container">
        <button type='submit' className='btn btn-primary' onClick={() => { setOpen(Open ^ 1) }} > Add Projects</button>
        <div className="container prjt__container">
          {Projects.map((Project) => { return <Dispprjt Open2={Open2} setProject2={setProject2} setOpen2={setOpen2} key={Project._id} Project={Project} /> })}
        </div>
      </div>
    </section>
  )
}

export default Prjt