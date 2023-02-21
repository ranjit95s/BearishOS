import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import aaa from "./TrackedEventName.module.css";
const TimeTrackingDetails = () => {

    const [trackD, setTrackD] = useState({
        TotalTrackedTime: '00:00:00',
        CreatedOn: '00:00:00 00:00AM',
        CreatedBy: 'Sample User',
        WorkBreakdown: {
            Dashboard: '00:00:00',
            Email: '00:00:00',
            Video: '00:00:00',
            Workspace: '00:00:00',
            Calendar: '00:00:00',
            Message: '00:00:00',
            Contact: '00:00:00',
        },
        ManuallyAddTime: []
    })

    const updateInpbyID = (ids,text) => {
        setTrackD((prevState) =>
            ({
                ...prevState,
                ManuallyAddTime:
               prevState.ManuallyAddTime.map((el) =>
                el.id === ids
                    ? {
                        ...el,
                        ManuallyAddTime: el.ManuallyInputTitle=text,
                    }
                    : el
            )
            })
        );
        console.log(trackD.ManuallyAddTime)
    }
    const display_MultiTime_Array = trackD.ManuallyAddTime.map((d) => (
        <>
            {Object.keys(d).length > 0 ?
                <Stack key={d.id} width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={"center"}>
                    <Stack width={'75%'} className={`${aaa.trackerT} ${aaa.op05}`}>
                        <input onChange={(e) => updateInpbyID(d.id,e.target.value)} placeholder="Name" type="text" name={`Name${d.id}`} id={`Name${d.id}`} />
                    </Stack>
                    <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{d.AddTime}</Stack>
                </Stack>
                : ''}
        </>
    ));

    const updates = (ManuallyInputTitles, AddTimes) => {
        ManuallyInputTitles = 'Name';
        AddTimes = '00:00:00';
        let ids = trackD.ManuallyAddTime.length + 1;
        // let fromto = from + to;
        let arr = {'ManuallyInputTitle':ManuallyInputTitles,'AddTime':AddTimes,'id':ids};
        console.log(arr)
        console.log(ids)
        
        setTrackD((prevState) =>
            ({
                ...prevState,
                ManuallyAddTime:[
                    ...prevState.ManuallyAddTime, arr 
                ]
            })
        );
        console.log(ids)
        console.log(trackD)
    };

    return (
        <>
            <Stack className={aaa.timeTrack}>
                <Stack mb={'20px'} direction={'row'} justifyContent={'space-between'} alignItems={"center"} className={aaa.ssHead}>
                    <Stack className={aaa.mainText}>Time Tracking Details</Stack>
                </Stack>
                <Stack className={aaa.trackerDetails}>
                    <Stack margin={'10px 10px 5px 10px'} justifyContent={'start'} alignItems={"center"} direction={'row'} gap={'5px'}>
                        <Stack className={aaa.trackerT}>Total Tracked Time:</Stack>
                        <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{trackD.TotalTrackedTime}</Stack>
                    </Stack>
                    <Stack margin={'5px 10px'} justifyContent={'start'} alignItems={"center"} direction={'row'} gap={'5px'}>
                        <Stack className={aaa.trackerT}>Created On:</Stack>
                        <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{trackD.CreatedOn}</Stack>
                    </Stack>
                    <Stack margin={'5px 10px'} justifyContent={'start'} alignItems={"center"} direction={'row'} gap={'5px'}>
                        <Stack className={aaa.trackerT}>Created By:</Stack>
                        <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{trackD.CreatedBy}</Stack>
                    </Stack>
                    <Stack margin={'5px 10px'} justifyContent={'start'} alignItems={"flex-start"} direction={'column'} gap={'5px'}>
                        <Stack className={aaa.trackerT}>Work Break down:</Stack>
                        <Stack width={'100%'} direction={'column'} justifyContent={'start'} alignItems={"center"} gap={'5px'}>
                            {Object.entries(trackD.WorkBreakdown).map(([key, value]) => {
                                return (
                                    <Stack direction={'row'} width={'100%'} justifyContent={'start'} alignItems={"flex-start"}>
                                        <Stack className={`${aaa.trackerT} ${aaa.op05}`} width={'49%'}>{key}:</Stack>
                                        <Stack className={`${aaa.trackerT} ${aaa.op05}`} width={'49%'}>{value}</Stack>
                                    </Stack>
                                );
                            })}
                        </Stack>
                    </Stack>
                    <Stack className={aaa.scroll} margin={'5px 10px'} justifyContent={'start'} alignItems={"flex-start"} direction={'column'} gap={'5px'}>
                        <Stack width={'100%'} justifyContent={'space-between'} alignItems={"center"} direction={'row'}>
                            <Stack className={aaa.trackerT}>Manually Add Time</Stack>
                            <Stack onClick={() => {
                                        updates('NA', 'NA');
                                    }} className={`${aaa.trackerT} ${aaa.op05g}`}>Add</Stack>
                        </Stack>
                        <Stack width={'100%'} direction={'column'} justifyContent={'start'} alignItems={"center"} gap={'5px'}>
                            {/* {Object.keys(trackD.ManuallyAddTime).map((key) => {
                                return (
                                    <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={"center"}>
                                        <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{key.ManuallyInputTitle}:</Stack>
                                        <Stack className={`${aaa.trackerT} ${aaa.op05}`}>{key.ManuallyInputTitle}</Stack>
                                    </Stack>
                                );
                            })} */}
                            {display_MultiTime_Array}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
export default TimeTrackingDetails;