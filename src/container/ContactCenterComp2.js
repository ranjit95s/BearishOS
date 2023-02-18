import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';


// import {Plus,Dept,Team,Dire,Bearisuser,Status} from '../components/ContactCenterComp2/'

import {Plus} from '../components/ContactCenterComp2/Plus Icons'
import {Dept} from '../components/ContactCenterComp2/CreateNewDept'
import {Team} from '../components/ContactCenterComp2/CreateNewTeam'
import {Dire} from '../components/ContactCenterComp2/AddContactDire'
import {Bearisuser} from '../components/ContactCenterComp2/AddNewBearisUser'
import {Status} from '../components/ContactCenterComp2/Status'

function ContactCenterComp2() {
    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <Dept/> 
            <Team/> 
            <Dire/> 
            <Bearisuser/> 
            <Status/> 
            <Plus/> 
        </div>
    )
}

export default ContactCenterComp2;