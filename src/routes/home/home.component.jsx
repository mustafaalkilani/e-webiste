import HomeBody from '../../compoenets/home-body/home-body.component';
import './home.style.scss';

const Home = () => {
    const socialNetwork = {
        'facebook': 'https://facebook.com/mustafaalkilani',
        'instagram': 'https://instagram.com/mustafaalkilani4'
    };
    const handelSocialNetworkClick = (network) => {
        window.open(network, '_blank');
    }
    return (
        <>
        <div className='main-home-container'>
            <div className="fotter-info">
                <div className="contact">
                    <i class="fa-solid fa-phone"></i>
                    <p>+962 788498412</p>
                    <i class="fa-solid fa-paper-plane"></i>
                    <p>alkilanymustafa@gmail.com</p>
                </div>
                <div className="social-network">
                    <p className='social-name' onClick={() => handelSocialNetworkClick(socialNetwork['facebook'])}>facebook</p>
                    <p className='social-name' onClick={() => handelSocialNetworkClick(socialNetwork['instagram'])}>instagram</p>
                </div>
            </div>
            <div className='text-main-container'>
                <div className='home-text-container'>
                    <h1>Your Real Estate Partner in UAE</h1>
                    <h2>Your one-stop destination to your new home</h2>
                </div>
            </div>
    </div>
            <HomeBody />
        </>
    )
}

export default Home;