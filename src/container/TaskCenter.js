import React from 'react'
import "@fontsource/source-serif-pro";
import '../components/sty.module.css';
import TaskCenterM from '../components/TaskCenter/TaskCenterM'



function TaskCenter() {

    return (
        <div style={{"margin":"10px","gap":"20px"}}>
            <TaskCenterM/> 
        </div>
    )
}

export default TaskCenter