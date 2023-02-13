import { Fragment, useState, useContext } from 'react';
import InputFileds from '../../input-fileds/input-fileds.component';
import { SendEmail } from '../../../utils/mail.utils';
import './form.style.scss';

const defaultFormFileds = {
    'firstName': '',
    'lastName': '',
    'phone': '',
    'email': '',
    'message': '',
}

const Form = () => {
    const [formFileds, setFormFileds] = useState(defaultFormFileds);
    const {email, firstName, lastName, message, phone} = formFileds;
    const fileds = [
        {
            'id': '1',
            'label': 'First Name',
            'name': 'firstName',
            'value': firstName,
            'type': 'text',
            'len': '2',
        },
        {
            'id': '2',
            'label': 'Last Name',
            'name': 'lastName',
            'type': 'text',
            'value': lastName,
            'len': '2',    
        },
        {
            'id': '3',
            'label': 'Email',
            'name': 'email',
            'type': 'email',
            'value': email,
            'len': '2',    
        },
        {
            'id': '4',
            'label': 'Phone Number',
            'name': 'phone',
            'type': 'text',
            'value': phone,
            'len': '9',    
        },
        {
            'id': '5',
            'label': 'Message',
            'name': 'message',
            'type': 'text',
            'value': message,
            'len': '10',    
        },
    ]

    const resetFromFileds = () => {
        setFormFileds(defaultFormFileds);
    }

    const handelChange = (event) => {
        const { name, value } = event.target;

        setFormFileds({...formFileds, [name]: value});
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        const html = `Full Name: ${formFileds.firstName} ${formFileds.lastName}
        Email: ${formFileds.email}
        Phone: ${formFileds.phone}
        Message: ${formFileds.message}`
        SendEmail(html);
        resetFromFileds();
    }

    return (
        <div className='main-form-container'>
            <div className='info-container'>
                <div className='info'>
                    <div className='info-title'>
                    <i className="fa-solid fa-map-location-dot"></i>
                        <h2>Buy Property</h2>
                    </div>
                    <p>Dream home or investment opportunity</p>
                </div>
                <div className='info'>
                    <div className='info-title'>
                    <i className="fa-solid fa-user"></i>
                        <h2>Qualified Agents</h2>
                    </div>
                    <p>Professional agents to aid you</p>
                </div>
                <div className='info'>
                    <div className='info-title'>
                    <i className="fa-solid fa-house"></i>
                        <h2>Great Deals</h2>
                    </div>
                    <p>Your requirements, our responsibility</p>
                </div>
                <div className='info'>
                    <div className='info-title'>
                    <i className="fa-solid fa-wallet"></i>
                        <h2>Save Money</h2>
                    </div>
                    <p>Your budget is our concern</p>
                </div>
            </div>
            <div className='form-container'>
                <h2>Contact Us</h2>
                <form onSubmit={handelSubmit}>
                    {
                    fileds.map(({id, label, value, name, type, len}) => {
                        return (
                            <Fragment key={id}>
                                <InputFileds handelChange={handelChange} label={label} value={value} type={type} len={len} name={name}/>
                            </Fragment>
                        )
                    })
                    }
                <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;