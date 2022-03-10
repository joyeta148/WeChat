import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className='login_container'>
                <img
                    src="https://www.citypng.com/public/uploads/preview/-116005437588pfjhbwcgr.png"
                    alt=""
                />
                <div className='login_text'>
                    <h1>Sign in to WeChat</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login