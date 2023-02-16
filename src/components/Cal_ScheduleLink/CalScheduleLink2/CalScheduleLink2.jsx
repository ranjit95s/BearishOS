import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import cal from "../../img/lightCal.svg";
import lt from "../../img/lt.svg";
import gt from "../../img/gt.svg";
import Stack from "@mui/material/Stack";
import classes from "./Cal_ScheduleLink2.module.css";
const CalScheduleLink2 = () => {
    const INIAL_ARRAY = [
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
        {
            day:'tuesday',
            time:'10:00 AM'
        },
    ]
    return (
        <>
                <Box component="Cal_ScheduleLink2" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <Stack className={classes.header}>
                        Select a date and time for the event
                        </Stack>
                        <Stack className={classes.f}>
                            <Stack className={classes.title}>
                            January 10th, 2023
                            </Stack>
                            <Stack>
                                <img src={cal} alt="" />
                            </Stack>
                            <Stack>
                            <img src={lt} alt="" />
                            </Stack>
                            <Stack>
                            <img src={gt} alt="" />
                            </Stack>
                        </Stack>
                        <Stack className={classes.event}>
                            {INIAL_ARRAY.map((ia) => {
                                return (
                                    <Stack style={{marginTop:"11px"}} className={classes.header}>
                        {ia.day},{ia.time}
                        </Stack>
                                );
                            })}
                        </Stack>
                    </Card>
                </Box>
        </>
    );
};
export default CalScheduleLink2;
