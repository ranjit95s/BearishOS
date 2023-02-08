import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import Comments from '../components/WorkSpaceMoreComp/Comments'
import NameYourFork from '../components/WorkSpaceMoreComp/NameYourFork'
import ReqSent from '../components/WorkSpaceMoreComp/ReqSent'
import AccessDenied from '../components/WorkSpaceMoreComp/AccessDenied'
import ReturnToDoc from '../components/WorkSpaceMoreComp/RetToDoc' 

import Welcome from '../components/WorkSpaceMoreComp/Welcome'
import ReqAccess from '../components/WorkSpaceMoreComp/ReqAccess'
import AddComment from '../components/WorkSpaceMoreComp/AddComment'


function WorkSpaceMoreComp() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
             
            <NameYourFork/> 
            <ReqSent/> 
            <AccessDenied/> 
            <Welcome/>
            {/* <Comments/> */}
            <ReturnToDoc/>
            <ReqAccess/>
            <AddComment/>
        </div>
    )
}

export default WorkSpaceMoreComp