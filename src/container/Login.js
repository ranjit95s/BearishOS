import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import Login1 from '../components/Login/Login1'
import ForgotP from '../components/Login/ForgotP'
import CreateID from '../components/Login/CreateID'



function Login() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <Login1/> 
            <ForgotP/> 
            <CreateID/> 
        </div>
    )
}

export default Login