import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import {SettingComp} from '../components/SettingsComp/'

function SettingComps() {
    return (
        <div style={{"display":"flex","flexWrap":"wrap"}}>
            <SettingComp/>   
        </div>
    )
}

export default SettingComps;