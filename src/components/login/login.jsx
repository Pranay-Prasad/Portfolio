import React, {useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [credential, setcredential] = useState({password:""});
    const [ok, setOk] = useState(true);
    const navigate = useNavigate();
    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password:credential.password})
        });
        const json = await response.json();
        if(json.success){
            //Redirect
            localStorage.setItem('success',json.success);
            setOk(true);
            navigate("/admin");
        }
        else{
            setcredential({password:""});
            setOk(false);
            //alert function to_do
        }
    }
    const onChange = (e) =>{
        setcredential({...credential,[e.target.name]:e.target.value})
    }
    return (
        <section id='login' className='container login__container'>
            <div className="login__contain">
                <div className="login__comp">
                    <h3>Admin Login</h3>
                    <form onSubmit={handelSubmit}>
                        <input type="password" placeholder={ok?'Admin Password':'Wrong Password'} value={credential.password} onChange={onChange} name='password'/>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login