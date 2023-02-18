import { useState } from 'react';
import './admin.styles.scss';
import {signInAuthUserWithEmailAndPassword} from '../../utils/firestore.utils';
import { useNavigate } from 'react-router-dom';

const inputValues = {
    email: '',
    password: '',
}

const Admin = () => {
    const [formFileds, setFormFileds] = useState(inputValues);
    const {email, password} = formFileds;
    const navigate = useNavigate();
    const fileds = [
        {
            id: '1',
            name: 'email',
            value: email,
            type: 'email',
            len: '2',
            label: 'Email',
        },
        {
            id: '2',
            name: 'password',
            type: 'password',
            value: password,
            len: '2',
            label: 'Password',
        },
    ]

    const resetFileds = () => {
        setFormFileds(inputValues);
    }

    const handelSubmit = async (event) => {
        const { email, password } = event.target.elements;
        event.preventDefault();
        const response = await signInAuthUserWithEmailAndPassword(email.value, password.value);
        console.log(response);
        resetFileds();
        if (response) {
            navigate('/dashboard'); // redirect to dashboard if user is logged in
          }
    }

    const handelChange = (event) => {
        const { name, value } = event.target;
        console.log(formFileds);

        setFormFileds({...formFileds, [name]: value});
    }
    return (
        <div>
            <nav className="main-nav">
            <div className="login-box">
                <div className="div-h1">
                    <h1 className='h1-admin-page'>Login</h1>
                </div>
                <form onSubmit={handelSubmit}>
                    {
                        fileds.map(({id, name, type, value, len, label}) => {
                            return (
                            <div className="user-box" key={id}>
                                <input type={type} required value={value} name={name} minLength={len} onChange={handelChange}/>
                                <label>{label}</label>
                            </div>            
                            )
                        })
                    }
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </button>
                </form>
            </div>
        </nav>
        </div>
    )
}

export default Admin;