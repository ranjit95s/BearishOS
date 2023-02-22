import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import classes from "./CallChat.module.css";
import Typography from "@mui/material/Typography";
import ActionDrop from './ActionDrop'
const MsgPart = () => {
    const [action, setAction] = useState(false);

    return (
        <>
            <Stack
                style={{ position: "relative" }}
                onClick={() => setAction(action ? false : true)}
            >
                <Stack className={classes.textG}>
                    <Typography
                        variant="h5"
                        style={{ width: "25px" }}
                        className={classes.iconU}
                    >
                        LB
                    </Typography>
                </Stack>
                <Stack
                    gap={"10px"}
                    direction={"row"}
                    justifyContent={"end"}
                    alignItems={"center"}
                >
                    {/* <Stack className={classes.times}>View Comment</Stack> */}
                    <Stack className={classes.times}> 00:00:00 - 00:00 AM</Stack>
                </Stack>
                {action && <Stack
                    gap={"24px"}
                    className={classes.abs}
                >
                    <ActionDrop/>
                </Stack>}
            </Stack>
        </>
    );
}
export default MsgPart;