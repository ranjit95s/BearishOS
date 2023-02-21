import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import aaa from "./TrackedEventName.module.css";
import lt from '../../img/lt.svg'
import gt from '../../img/gt.svg'
const ScreenShot = () => {
    

    return (
        <>
            <Stack className={aaa.ss}>
                <Stack mb={'20px'} direction={'row'} justifyContent={'space-between'} alignItems={"center"} className={aaa.ssHead}>
                    <Stack className={aaa.mainText}>ScreenShot</Stack>
                    <Stack className={aaa.imgSty} gap={'15px'} direction={'row'} alignItems={"center"}>
                        <img src={lt} alt="lt" />
                        <img src={gt} alt="gt" />
                    </Stack>
                </Stack>
                <Stack className={aaa.screenShot}>
                    {/* <img src="" alt="alt" /> */}
                </Stack>
            </Stack>
        </>
    );
}
export default ScreenShot;