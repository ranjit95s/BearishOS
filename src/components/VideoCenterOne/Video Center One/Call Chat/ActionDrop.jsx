import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import classes from "./CallChat.module.css";
import hide from "../../../img/hide.svg";
import trash from "../../../img/rtrash.svg";
import BlueLoc from "../../../img/BlueLoc.svg";
import ceye from "../../../img/ceye.svg";
import Close from "../../../img/Close.svg";
import greenCheck from "../../../img/greenCheck.svg";
const ActionDrop = () => {
    const [deletes, setDeletes] = useState(false);

    return (
        <>
            
                    <Stack
                        style={{
                            flexDirection: "row",
                            margin: "10px 10px -15px 10px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Stack className={classes.absText} style={{ opacity: "1" }}>
                            Comments Menu
                        </Stack>
                        <img src={Close} alt="alt" />
                    </Stack>
                    <Stack gap={"8px"} className={classes.absT}>
                        <img src={greenCheck} alt="alt" />
                        <Stack className={classes.absText}>Resolve Comment</Stack>
                    </Stack>
                    <Stack gap={"8px"} className={classes.absT}>
                        <img src={hide} alt="alt" />
                        <Stack className={classes.absText}>Hide Comments</Stack>
                    </Stack>
                    <Stack gap={"8px"} className={classes.absT}>
                        <img src={ceye} alt="alt" />
                        <Stack className={classes.absText}>View All Comments</Stack>
                    </Stack>
                    <Stack gap={"8px"} className={classes.absT}>
                        <img src={BlueLoc} alt="alt" />
                        <Stack className={classes.absText}>Place Comment</Stack>
                    </Stack>
                    <Stack
                        gap={"8px"}
                        className={classes.absT}
                        onClick={(e) => {e.stopPropagation(); setDeletes(deletes ? false : true)}}
                    >
                        <img src={trash} alt="alt" />
                        <Stack className={classes.absText}>Delete</Stack>
                        <Stack
                            style={{ width: "200px" }}
                            className={deletes ? classes.abs5 : classes.spanHide}
                        >
                            <Stack style={{ padding: "0px" }} className={classes.ho100}>
                                <Stack variant="h1" className={classes.dt}>
                                    Delete Comment
                                </Stack>
                                <Stack variant="h1" className={classes.infod}>
                                    You are about to delete a comment. If you are sure you
                                    want to do this, type delete below. This action can not
                                    be undone.
                                </Stack>
                                <Stack
                                    style={{ padding: "7px" }}
                                    className={classes.redI2}
                                >
                                    <input
                                        placeholder="Delete (case sensitive)"
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
                    </Stack>
                
        </>
    );
}
export default ActionDrop;