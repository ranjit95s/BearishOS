import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import NameYourReco from '../components/SuperChargeComp/NameYourReco'
import NameYourReco1 from '../components/SuperChargeComp/NameYourReco1'
import Success from '../components/SuperChargeComp/Success'
import NameYourProj from '../components/SuperChargeComp/NameYourProj'
import NameYourProj1 from '../components/SuperChargeComp/NameYourProj1'
import Message from '../components/SuperChargeComp/Message'
import CreateSnippet from '../components/SuperChargeComp/CreateSnippet'
import AllSnippet from '../components/SuperChargeComp/AllSnippet'
import Oops from '../components/SuperChargeComp/Oops'

import NameYourProj12 from '../components/SuperChargeComp/Name_Your_project/NameYourProj'
import NameYourReco12 from '../components/SuperChargeComp/Name_Your_Recording/NameYourReco'

import NameYourProj123 from '../components/SuperChargeComp/Project_Control/NameYourProj1'
import NameYourReco123 from '../components/SuperChargeComp/Recording_Controls/NameYourReco1'

function SuperChargeComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            {/* <NameYourReco/>  */}
            <NameYourReco12/> 
            <NameYourReco123/> 
            <Success/> 
            {/* <NameYourProj/>  */}
            <NameYourProj12/> 
            <NameYourProj123/> 
            <Message/> 
            <CreateSnippet/> 
            <AllSnippet/> 
            <Oops/> 
        </div>
    )
}

export default SuperChargeComp