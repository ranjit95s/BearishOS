import React, { useState } from "react";
import Box from "@mui/material/Box";
import three from "../../../img/3x3 hori.svg";
import Stack from "@mui/material/Stack";
import classes from "./CalendarScheduleLink.module.css";
import DropDown from './DropDown'
const CalendarScheduleLink = () => {
    const [dropS, setDropS] = useState(false)
    return (
        <>
            <Stack component="CalendarScheduleLink" className={classes.boxStyle}>
                <Stack onClick={() => setDropS(dropS ?  false : true)} className={dropS ? `${classes.boxIn} ${classes.bg}` : `${classes.boxIn}`}>
                    <img src={three} alt="alt" />
                </Stack>
                {dropS && <DropDown/>}
            </Stack>
        </>
    );
};
export default CalendarScheduleLink;
