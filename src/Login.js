import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => { };
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
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login