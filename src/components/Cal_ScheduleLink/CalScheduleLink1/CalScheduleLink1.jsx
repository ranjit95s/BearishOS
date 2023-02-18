import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Close from "../../img/Close.svg";
import Stack from "@mui/material/Stack";
import classes from "./Cal_ScheduleLink1.module.css";
const CalScheduleLink1 = () => {
    const [inpdatas, setinpdatas] = useState({
        flName: "",
        eventName: "",
        loc: "",
        detail: "",
    });
    return (
        <>
            <Stack component="Cal_ScheduleLink1" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <Stack className={classes.imgSty}>
                        <Stack className={classes.imgIcon}>
                            {/* <img src={Close} alt="" /> */}
                        </Stack>
                    </Stack>
                    <Stack gap={"20px"} className={classes.inpf}>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, flName: e.target.value })
                                }
                                type="text"
                                placeholder="First Name, Last Name"
                                name="flname"
                            />
                        </Stack>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, eventName: e.target.value })
                                }
                                type="text"
                                placeholder="Name of Scheduled Event"
                                name="ev"
                            />
                        </Stack>
                        <Stack className={classes.inpy}>
                            <input
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, loc: e.target.value })
                                }
                                type="text"
                                placeholder="Location of Event"
                                name="l"
                            />
                        </Stack>
                        <Stack style={{height:"250px"}} className={classes.inpy}>
                            <textarea
                                onChange={(e) =>
                                    setinpdatas({ ...inpdatas, detail: e.target.value })
                                }
                                type="text"
                                placeholder="Details of Event"
                                name="d"
                            />
                        </Stack>
                    </Stack>
                </Card>
            </Stack>
        </>
    );
};
export default CalScheduleLink1;
