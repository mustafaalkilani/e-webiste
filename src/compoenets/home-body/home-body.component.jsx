import './home-body.style.scss';
import Form from '../form/form.component';
import HomeProperties from '../properties/properties.component';
import About from '../about/about.component';
import OverLay from '../overlay/overlay.component';
import Contact from '../Contact/contact.component';
const HomeBody = () => {
    return (
        <div className='home-body-container'>
            <div className='home-body-title'>
                <h1>
                    Welcome to WHITE Consultant for Real Estate
                </h1>
                <p>
                    We are defining the luxury real estate industry, WHITE Consultant for Real Estate offers housing experiences through our professional agents and exceptional deals.
                </p>
            </div>
            <Form />
            <HomeProperties />
            <OverLay />
            <About />
            <Contact />
        </div>
    )
}

export default HomeBody;