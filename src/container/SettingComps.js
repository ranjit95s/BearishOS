import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import {SettingComp,
    TranquilAI,
    Security,
    Notification,
    HandShakeAI,
    General,
    AdminConsole,Plan} from '../components/SettingsComp/'

function SettingComps() {
    return (
        <div style={{"display":"flex","flexWrap":"wrap"}}>
            <SettingComp/>   
            <General/>   
            <Security/>   
            <HandShakeAI/>   
            <AdminConsole/>   
            <Plan/>   
            <Notification/>   
            <TranquilAI/>   
        </div>
    )
}

export default SettingComps;