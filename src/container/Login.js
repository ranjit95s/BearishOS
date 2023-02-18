import React from 'react'
import "@fontsource/source-serif-pro";
// import '../components/sty.module.css';
// import Login1 from '../components/Login/Login1'
// import {ForgotP} from '../components/ForgotPass/'
// import {CreateID} from '../components/CreateAccount/'
import {ForgotPassRedirect} from '../components/ForgotPassRedirect'
import {CreateAccOneTimeCode} from '../components/CreateAccOneTimeCode'

function Login() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <CreateAccOneTimeCode/>
            <ForgotPassRedirect/>
        </div>
    )
}

export default Login