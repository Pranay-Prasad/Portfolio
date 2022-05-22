import React from 'react'
import {AiOutlineBulb} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const Nvbar = () => {
    const navigate = useNavigate();
    const click = ()=>{
        localStorage.clear();
        navigate('/admin/login')
    }
    return (
        <nav>
            <a href="#skll"><AiOutlineBulb/></a>
            <a href="#prjt"><BiBook/></a>
            {/* eslint-disable-next-line */}
            <a href="#" onClick={click}><RiDeleteBin6Line/></a>
        </nav>
    )
}

export default Nvbar