import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import TaskCenterM from '../components/TaskCenter/TaskCenterM'



function TaskCenter() {

    return (
        <div style={{"display":"flex","flex-wrap": "wrap"}}>
            <TaskCenterM/> 
        </div>
    )
}

export default TaskCenter