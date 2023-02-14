import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Close from "../../img/Close.svg";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./ChangePassword.module.css";
import ImageListItem from "@mui/material/ImageListItem";
import CardContent from "@mui/material/CardContent";
const ChangePassword = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="ChangePassword" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Stack className={classes.t61825}>Change Password</Stack>
                            <ImageListItem id="my-EmbarrassingGmailCalendar">
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Stack className={classes.info}>
                            Type your new password below. It must contain one special
                            character, a capital letter, and a number.
                        </Stack>
                        <Stack className={classes.inpf}>
                            <Stack className={classes.inpy}>
                                <input
                                    placeholder="Current Password"
                                    type="password"
                                    name="old"
                                    id="od "
                                />
                            </Stack>
                            <hr></hr>
                            <Stack className={classes.inpy}>
                                <input
                                    placeholder="New Password"
                                    type="password"
                                    name="old"
                                    id="od "
                                />
                            </Stack>
                            <Stack style={{ "margin-top": "10px" }} className={classes.inpy}>
                                <input
                                    placeholder="New Password"
                                    type="password"
                                    name="old"
                                    id="od "
                                />
                            </Stack>
                        </Stack>
                        <Stack className={classes.btno}>
                            <Stack className={classes.btni}>Update</Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};
export default ChangePassword;
