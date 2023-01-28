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



function SuperChargeComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <NameYourReco/> 
            <NameYourReco1/> 
            <Success/> 
            <NameYourProj/> 
            <NameYourProj1/> 
            <Message/> 
            <CreateSnippet/> 
            <AllSnippet/> 
            <Oops/> 
        </div>
    )
}

export default SuperChargeComp