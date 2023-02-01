import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import FirstConnect from '../components/Email Center/FirstConnect'
import AlphaAccess from '../components/Email Center/AlphaAccess'
import TicklingtheBackendGmail from '../components/Email Center/TicklingtheBackendGmail'
import TicklingtheBackendLook from '../components/Email Center/TicklingtheBackendLook'
import SuccessGmail from '../components/Email Center/SuccessGmail'
import SuccessLook from '../components/Email Center/SuccessLook'
import EmbarrassingGmail from '../components/Email Center/EmbarrassingGmail'
import EmbarrassingLook from '../components/Email Center/EmbarrassingLook'
import EnterName from '../components/Email Center/EnterName'


import FirstConnect1 from '../components/Email Center/FirstConnect/FirstConnect'
function EmailComp() {

    return (
        <div style={{"display":"flex","flexWrap": "wrap"}}>
            <FirstConnect/>
            <FirstConnect1/>
            <AlphaAccess/>
            <TicklingtheBackendGmail/>
            <SuccessGmail/>
            <EmbarrassingGmail/>
            <EnterName/>
            <TicklingtheBackendLook/>
            <EmbarrassingLook/>
            <SuccessLook/>
        </div>
    )
}

export default EmailComp