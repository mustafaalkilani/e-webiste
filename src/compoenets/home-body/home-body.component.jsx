import './home-body.style.scss';
import Form from './form/form.component';

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
        </div>
    )
}

export default HomeBody;