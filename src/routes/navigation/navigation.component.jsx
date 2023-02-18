import { useContext} from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PhoneNavigationContext } from "../../context/phone-navigation.context";
import { NavigationScrollToContext } from "../../context/navigation-scroll.context";
import './navigation.style.scss';

const Navigation = () => {
    const location = useLocation();
    const {pathname, hash} = location;
    const {setPhoneNavigationBtn, phoneNavigationBtn} = useContext(PhoneNavigationContext);
    const {propertiesRef, homeRef, aboutRef, contactRef} = useContext(NavigationScrollToContext);

    const handelClick = () => {
        if(phoneNavigationBtn === 'closed') {
            setPhoneNavigationBtn('open');
        } else if (phoneNavigationBtn === 'open') {
            setPhoneNavigationBtn('closed');
        }
    }
    const hanedlWhatsappClick = () => {
        window.open('https://www.mustafaalkilani.com', '_blank');
    }

    const handelPhoneClick = (ref) => {
        setPhoneNavigationBtn('closed');
        ref.current.scrollIntoView();
    }

    return (
        <div className="main-container">
            <div className="navigation-bar-container">
                <Link to='/' onClick={() => homeRef.current.scrollIntoView()} style={{'border': `${pathname === '/' && hash === '' ? '1px solid #000': 'none'}`}}>Home</Link>
                <Link to='#contact' onClick={() => contactRef.current.scrollIntoView()} style={{'border': `${hash === '#contact' ? '1px solid #000': 'none'}`}}>Contect</Link>  
                <Link to='#properties' onClick={() => propertiesRef.current.scrollIntoView()} style={{'border': `${hash === '#properties' ? '1px solid #000': 'none'}`}}>Properties</Link>  
                <Link to='#about'  onClick={() => aboutRef.current.scrollIntoView()} style={{'border': `${hash === '#about' ? '1px solid #000': 'none'}`}}>About</Link>  
            </div>
            <div className="phone-navigation-bar-container" style={{'display': `${phoneNavigationBtn === 'open' ? 'flex': 'none'}`}}>
                <Link to='/' onClick={() => handelPhoneClick(homeRef)} style={{'border': `${pathname === '/' && hash === '' ? '1px solid #000': 'none'}`}}>Home</Link>
                <Link to='#contact' onClick={() => handelPhoneClick(contactRef)} style={{'border': `${hash === '#contact' ? '1px solid #000': 'none'}`}}>Contect</Link>  
                <Link to='#properties' onClick={() => handelPhoneClick(propertiesRef)} style={{'border': `${hash === '#properties' ? '1px solid #000': 'none'}`}}>Properties</Link>  
                <Link to='#about' onClick={() => handelPhoneClick(aboutRef)} style={{'border': `${hash === '#about' ? '1px solid #000': 'none'}`}}>About</Link>  
            </div>
            <div className="phone-navigation-btn" onClick={handelClick}>
            {phoneNavigationBtn === 'closed' ? <i className="fa-solid fa-bars"></i>: <i className="fa-sharp fa-solid fa-xmark"></i>}
            </div>
            <div className='whatsapp-icon' onClick={hanedlWhatsappClick}>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
            <Outlet />
    </div>
    )
}

export default Navigation;