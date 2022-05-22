import React,{useEffect} from 'react'
import './admin.css'
import Nvbar from './nvbar'
import Skll from './skll';
import Prjt from './Prjt';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('success')){
      navigate('login')
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <div className='headname'>
        <h1>Admin Page</h1>
      </div>
        <Nvbar/>
        <Skll/>
        <Prjt/>
    </>
  )
}

export default Admin