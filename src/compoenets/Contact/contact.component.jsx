import './contact.styles.scss';

const Contact = () => {
    const socialNetwork = {
        'facebook': 'https://facebook.com/mustafaalkilani',
        'instagram': 'https://instagram.com/mustafaalkilani4'
    };
    const handelSocialNetworkClick = (network) => {
        window.open(network, '_blank');
    }
    return (
        <div className='contact-container'>
            <div className='contact-company-logo'>
                <h1>Companylogo</h1>
                <p>company Name © 2023</p>
            </div>
            <div className='contact-company-info'>
                <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>444 s.Locationhere, city</h3>
                </div>
                <div>
                    <i className="fa-solid fa-phone"></i>
                    <h3>+9627888888888</h3>
                </div>
                <div>
                    <i className="fa-solid fa-envelope"></i>
                    <h3>email@company.com</h3>
                </div>
            </div>
            <div className='contact-company-about'>
            <h2>About the company</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse commodi suscipit dolores non quam temporibus ex adipisci natus quibusdam rerum, reiciendis, voluptatibus quaerat ratione similique alias consequuntur aperiam numquam impedit.</p>
            <i className="fa-brands fa-facebook" onClick={() => handelSocialNetworkClick(socialNetwork['facebook'])}></i>
            <i className="fa-brands fa-instagram" onClick={() => handelSocialNetworkClick(socialNetwork['instagram'])}></i>
            </div>
        </div>
    )
}

export default Contact;