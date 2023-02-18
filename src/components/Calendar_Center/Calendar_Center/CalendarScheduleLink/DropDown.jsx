import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import smc from '../../../img/smc.png';
import logoM from '../../../img/LogoM.png'
import sgc from '../../../img/sgc.png';
import gear from '../../../img/gear1.svg';
import hide from '../../../img/hide.svg';
import trash from '../../../img/rtrash.svg';
import Stack from "@mui/material/Stack";
import DeleteLink from './DeleteLink'
import classes from "./CalendarScheduleLink.module.css";
const DropDown = () => {
    const [deleteLink, setDeleteLink] = useState(false)
    return (
        <>
            <Box component="CalendarScheduleLink" className={classes.boxStyle1}>
                <Card className={classes.boxIn1}>
                    <Stack style={{marginTop:"10px"}}>
                        <Stack className={classes.calTitle}>Calendars</Stack>
                        <Stack gap={'20px'} style={{marginTop:"10px"}}>
                        <Stack className={classes.calFlex}>
                            <Stack className={classes.calF2}>
                                <img src={logoM} alt="" />
                                <Stack className={classes.calOptionTitle}>
                                Bearish Calendar
                                </Stack>
                            </Stack>
                            <Stack className={classes.calF2}>
                                <img src={hide} alt="" />
                                <img src={gear} alt="" />
                            </Stack>
                        </Stack>
                        <Stack className={classes.calFlex}>
                            <Stack className={classes.calF2}>
                                <img src={sgc} alt="" />
                                <Stack className={classes.calOptionTitle}>
                                Calendar Name
                                </Stack>
                            </Stack>
                            <Stack className={classes.calF2}>
                                <img src={hide} alt="" />
                                <img src={gear} alt="" />
                            </Stack>
                        </Stack>
                        <Stack className={classes.calFlex}>
                            <Stack className={classes.calF2}>
                                <img src={smc} alt="" />
                                <Stack className={classes.calOptionTitle}>
                                Calendar Name
                                </Stack>
                            </Stack>
                            <Stack className={classes.calF2}>
                                <img src={hide} alt="" />
                                <img src={gear} alt="" />
                            </Stack>
                        </Stack>
                        </Stack>
                    </Stack>
                    <Stack style={{marginTop:"20px"}}>
                        <Stack className={classes.calTitle}>Schedule Links</Stack>
                        <Stack gap={'20px'} style={{marginTop:"10px"}}>
                        <Stack className={classes.calFlex}>
                            <Stack className={classes.calF2}>
                                <img src={logoM} alt="" />
                                <Stack className={classes.calOptionTitle}>
                                Link Name
                                </Stack>
                            </Stack>
                            <Stack onClick={() => setDeleteLink(deleteLink ? false : true)} className={classes.calF2}>
                                <img src={trash} alt="" />
                            </Stack>
                            {deleteLink && <DeleteLink/>}
                        </Stack>
                        </Stack>
                    </Stack>
                </Card>
            </Box>
        </>
    );
};
export default DropDown;