import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Close from "../../img/Close.svg";
import Stack from "@mui/material/Stack";
import classes from "./Cal_ScheduleLink3.module.css";
const CalScheduleLink3 = () => {
    const [inpdatas, setinpdatas] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        detailOther: "",
    });
    return (
        <>
                <Stack component="Cal_ScheduleLink3" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                    <Stack className={classes.header}>
                    You’ve selected…
                        </Stack>
                        <Stack className={classes.f}>
                            <Stack style={{marginRight:"50px",marginLeft:"5px"}} className={classes.title}>
                            January 10th, 2023
                            </Stack>
                            <Stack className={classes.title}>
                            at
                            </Stack>
                        </Stack>
                        <Stack className={classes.header}>
                        Thursday, 10:00 AM
                        </Stack>
                    <Stack gap={"11px"} className={classes.inpf}>
                        <Stack gap={'11px'} className={classes.ff}>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, fName: e.target.value })
                                }
                                type="text"
                                placeholder="First Name"
                                name="fname"
                            />
                        </Stack>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, lName: e.target.value })
                                }
                                type="text"
                                placeholder="Last Name"
                                name="lname"
                            />
                        </Stack>
                        </Stack>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, email: e.target.value })
                                }
                                type="email"
                                placeholder="Email"
                                name="ev"
                            />
                        </Stack>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, phone: e.target.value })
                                }
                                type="number"
                                placeholder="(- - -) - 000 - 0000"
                                name="p"
                            />
                        </Stack>
                        <Stack style={{height:"150px"}} className={classes.inpy}>
                            <textarea
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, detailOther: e.target.value })
                                }
                                type="text"
                                placeholder="Please share any other details you’d like me to know before the meeting."
                                name="d"
                            />
                        </Stack>
                    </Stack>
                    <Stack className={classes.btno}>
                            <Stack className={classes.btni}>Schedule Event Now</Stack>
                        </Stack>
                    </Card>
                </Stack>
        </>
    );
};
export default CalScheduleLink3;
