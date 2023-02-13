import HomeBody from '../../compoenets/home-body/home-body.component';
import './home.style.scss';

const Home = () => {
    return (
        <>
            <div className='main-home-container'>
                <div className='home-text-container'>
                    <h1>Your Real Estate Partner in UAE</h1>
                    <h2>Your one-stop destination to your new home</h2>
                </div>
            </div>
            <HomeBody />
        </>
    )
}

export default Home;