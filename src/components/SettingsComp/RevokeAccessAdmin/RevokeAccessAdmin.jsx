import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Close from "../../img/Close.svg";
import ImageListItem from "@mui/material/ImageListItem";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./RevokeAccessAdmin.module.css";
const RevokeAccessAdmin = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="RevokeAccessAdmin"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    
                    <CardContent className={classes.titleStyle}>
                            <Stack className={classes.t61825}>Revoke Access Admin</Stack>
                            <ImageListItem id="my-EmbarrassingGmailCalendar">
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Stack className={classes.info}>
                        At this time an Admin account can only be revoked by the admin that is leaving Bearish OS.
                        </Stack>
                        <Stack className={classes.inpf}>
                            <Stack className={classes.inpy}>
                                <input
                                    placeholder="User First Name and Last Name"
                                    type="password"
                                    name="name"
                                    id="odw "
                                />
                            </Stack>
                            <hr></hr>
                            <Stack gap={'10px'} className={classes.inpy}>
                                Access Level: 
                                <span className={classes.op1}> Team Lead</span>
                            </Stack>
                            <Stack style={{ "margin-top": "10px" }} className={classes.inpy}>
                                <input
                                    placeholder="Type revoke my Bearish OS access"
                                    type="access"
                                    name="old"
                                    id="ode "
                                />
                            </Stack>
                        </Stack>
                        <Stack className={classes.btno}>
                            <Stack className={classes.btni}>Revoke Now</Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default RevokeAccessAdmin;