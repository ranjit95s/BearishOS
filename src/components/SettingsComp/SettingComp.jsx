import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Setting.module.css";
const SettingComp = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="settings12"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    
                                <Stack
                                    className={classes.mainT}
                                >
                                    settings
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    General
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Plan
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Security
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Notifications
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Handshake AI
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Tranquil AI
                                </Stack>
                                <Stack
                                    className={classes.subT}
                                >
                                    Admin Console
                                </Stack>
                            
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default SettingComp;