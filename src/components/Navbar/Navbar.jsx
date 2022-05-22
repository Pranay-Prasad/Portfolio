import React from 'react'
import './navbar.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineBulb} from 'react-icons/ai'
import {BiBook,BiMessageSquareCheck} from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
  const [activenav,setactivenav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setactivenav('#')} className={activenav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setactivenav('#about')} className={activenav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href='#skills' onClick={()=> setactivenav('#skills')} className={activenav==='#skills'?'active':''}><AiOutlineBulb/></a>
      <a href='#work' onClick={()=> setactivenav('#work')} className={activenav==='#work'?'active':''}><BiBook/></a>
      <a href='#contact' onClick={()=> setactivenav('#contact')} className={activenav==='#contact'?'active':''}><BiMessageSquareCheck/></a>
    </nav>
  )
}

export default Navbar