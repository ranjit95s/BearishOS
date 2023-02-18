import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import classes from "./CalendarScheduleLink.module.css";
const DeleteLink = () => {
    return (
        <>
            <Stack
                style={{ width: "200px" }}
                className={classes.abs5}
            >
                <Stack style={{ padding: "0px" }} className={classes.ho100}>
                    <Stack variant="h1" className={classes.dt}>
                    Delete Schedule Link
                    </Stack>
                    <Stack variant="h1" className={classes.infod}>
                    You are about to delete [Schedule Link]. If you are sure you want to do this, type the name of the link below. This action can not be undone.
                    </Stack>
                    <Stack style={{ padding: "7px" }} className={classes.redI2}>
                        <input
                            placeholder="Type Name of Schedule Link (case sensitive)"
                            className={classes.redII}
                            type="text"
                            name="link"
                            id="link"
                        />
                    </Stack>
                    <Stack className={classes.redII2}>
                        <button className={classes.redII}>
                            {" "}
                            Permanently Delete Now{" "}
                        </button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
export default DeleteLink;