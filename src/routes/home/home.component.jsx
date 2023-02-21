import { useContext } from 'react';
import { PropDataFetchContext } from '../../context/properties-data.context';
import HomeBody from '../../compoenets/home-body/home-body.component';
import './home.style.scss';
import Loading from '../../compoenets/loading-spinner/loading.component';

const Home = () => {
    const {getProp} = useContext(PropDataFetchContext);
    const socialNetwork = {
        'facebook': 'https://facebook.com/mustafaalkilani',
        'instagram': 'https://instagram.com/mustafaalkilani4'
    };
    const handelSocialNetworkClick = (network) => {
        window.open(network, '_blank');
    }
    return (
        <>
        {getProp ? 
                <>
                <div className='main-home-container'>
                    <div className="fotter-info">
                        <div className="contact">
                            <i className="fa-solid fa-phone"></i>
                            <p>+962 788498412</p>
                            <i className="fa-solid fa-paper-plane"></i>
                            <p>alkilanymustafa@gmail.com</p>
                        </div>
                        <div className="social-network">
                            <p className='social-name' onClick={() => handelSocialNetworkClick(socialNetwork['facebook'])}>facebook</p>
                            <p className='social-name' onClick={() => handelSocialNetworkClick(socialNetwork['instagram'])}>instagram</p>
                        </div>
                    </div>
                    <div className='text-main-container' id='Home'>
                        <div className='home-text-container'>
                            <h1>Your Real Estate Partner in UAE</h1>
                            <h2>Your one-stop destination to your new home</h2>
                        </div>
                    </div>
            </div>
                    <HomeBody />
                </>: <Loading />}
        </>
    )
}

export default Home;