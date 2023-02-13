import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PhoneNavigationContext } from "../../context/phone-navigation.context";
import './navigation.style.scss';

const Navigation = () => {
    const location = useLocation();
    const {pathname} = location;
    const {setPhoneNavigationBtn, phoneNavigationBtn} = useContext(PhoneNavigationContext);
    
    const handelClick = () => {
        if(phoneNavigationBtn === 'closed') {
            setPhoneNavigationBtn('open');
        } else if (phoneNavigationBtn === 'open') {
            setPhoneNavigationBtn('closed');
        }
    }
    return (
        <div className="main-container">
            <div className="navigation-bar-container">
                <Link to='/' style={{'border': `${pathname === '/' ? '1px solid #000': 'none'}`}}>Home</Link>
                <Link to='/pageTwo' style={{'border': `${pathname === '/pageTwo' ? '1px solid #000': 'none'}`}}>Page Two</Link>
            </div>
            <div className="phone-navigation-bar-container" style={{'display': `${phoneNavigationBtn === 'open' ? 'flex': 'none'}`}}>
                <Link to='/' style={{'border': `${pathname === '/' ? '1px solid #000': 'none'}`}} onClick={() => setPhoneNavigationBtn('closed')}>Home</Link>
                <Link to='/pageTwo' style={{'border': `${pathname === '/pageTwo' ? '1px solid #000': 'none'}`}} onClick={() => setPhoneNavigationBtn('closed')}>Page Two</Link>  
            </div>
            <div className="phone-navigation-btn" onClick={handelClick}>
            {phoneNavigationBtn === 'closed' ? <i className="fa-solid fa-bars"></i>: <i className="fa-sharp fa-solid fa-xmark"></i>}
            </div>
            <Outlet />
    </div>
    )
}

export default Navigation;