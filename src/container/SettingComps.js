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

    import {ChangePassword} from '../components/SettingsComp/ChangePassword'
    import {RevokeAccessAdmin} from '../components/SettingsComp/RevokeAccessAdmin'
    import {RevokeAccessLead} from '../components/SettingsComp/RevokeAccessLead'
    import {RevokeAccessMember} from '../components/SettingsComp/RevokeAccessMember'

function SettingComps() {
    return (
        <div style={{"display":"flex","flexWrap":"wrap"}}>
            {/* <SettingComp/>    */}
            {/* <General/>    */}
            {/* <Security/>    */}
            {/* <HandShakeAI/>    */}
            {/* <AdminConsole/>    */}
            {/* <Plan/>    */}
            {/* <Notification/>    */}
            {/* <TranquilAI/>    */}
            <ChangePassword/>   
            <RevokeAccessAdmin/>   
            <RevokeAccessLead/>   
            <RevokeAccessMember/>   
        </div>
    )
}

export default SettingComps;