import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./plan.module.css";
const Plan = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="Plan"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <Stack className={classes.w100}>
                            <Stack style={{"marginTop":"15px"}} className={classes.t61825}>Current Plan</Stack>
                            <hr></hr>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Your Plan:
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Bearish OS User Since:
                                    </Stack>
                                    <Stack style={{"opacity":"0.5"}} className={classes.t61115}>00/00/0000</Stack>
                                </Stack>
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Bearish OS plan administered by
                                    </Stack>
                                    <Stack style={{"opacity":"0.5"}} className={classes.t61115}>You</Stack>
                                </Stack>
                            </Stack>
                            <Stack style={{"marginTop":"20px"}} className={classes.adS}>
                                <Stack className={classes.t61825}>Upgrade Plan</Stack>
                                <Stack className={classes.upbtn}>Upgrade Now</Stack>
                            </Stack>
                            <Stack style={{"marginTop":"20px"}} className={classes.t61115}>
                            To edit and view your bill please visit the Admin Console
                                    </Stack>
                    </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default Plan;