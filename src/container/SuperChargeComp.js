import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
// import Success from '../components/SuperChargeComp/Success'
// import Message from '../components/SuperChargeComp/Message'
// import CreateSnippet from '../components/SuperChargeComp/CreateSnippet'
// import EditSnippet from '../components/SuperChargeComp/Edit_Snippets/EditSnippet'
// import AllSnippet from '../components/SuperChargeComp/AllSnippet'
import Oops from '../components/SuperChargeComp/Oops'

// import NameYourProj12 from '../components/SuperChargeComp/Name_Your_project/NameYourProj'
// import NameYourReco12 from '../components/SuperChargeComp/Name_Your_Recording/NameYourReco'
// import AllTrackingSessions from '../components/SuperChargeComp/All Tracking Sessions/AllTrackingSessions'

// import NameYourProj123 from '../components/SuperChargeComp/Project_Control/NameYourProj1'
// import NameYourReco123 from '../components/SuperChargeComp/Recording_Controls/NameYourReco1'
// import TrackedEventName from '../components/SuperChargeComp/Tracked Event Name/TrackedEventName'
function SuperChargeComp() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            {/* <NameYourReco12/> 
            <NameYourReco123/> 
            <Success/> 
            <NameYourProj12/> 
            <NameYourProj123/> 
            <Message/> 
            <CreateSnippet/> 
            <EditSnippet/>
            <AllSnippet/> 
            <AllTrackingSessions/> */}
            <Oops/> 
            {/* <TrackedEventName/> */}
        </div>
    )
}

export default SuperChargeComp