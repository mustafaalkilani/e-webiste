import { useContext, useEffect } from 'react';
import { SignInContext } from '../../context/signin.context';
import { useNavigate } from 'react-router-dom';

import './dashboard.styles.scss';

const DashBoardComp = () => {
    return (
        <div><h1>Hi</h1></div>
    )
}

const DashBoard = () => {
    const {isSignedIn} = useContext(SignInContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/');
        }
    }, [isSignedIn, navigate]);

    return (
        <div>
            {isSignedIn ? <DashBoardComp /> : null}
        </div>
    );
}

export default DashBoard;