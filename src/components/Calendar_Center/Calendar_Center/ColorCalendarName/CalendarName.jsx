import * as React from "react";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../../img/Close.svg";
import color from "../../../img/Access.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import aaa from "./CalendarName.module.css";
const CalendarName = () => {
    return (
        <>
            <Stack
                component="CName"
                style={{ height: "200px" }}
                className={aaa.boxStyle}
            >
                <Card className={aaa.boxIn}>
                    <CardContent className={aaa.headerStyle}>
                        <Typography variant="h1" className={aaa.tlStyle}>
                            Calendar Name
                        </Typography>
                        <ImageListItem id="my-element25">
                            <img src={Close} alt="close" loading="lazy" />
                        </ImageListItem>
                    </CardContent>
                    <CardActions className={aaa.signSec}>
                        <CardContent
                            className={aaa.signIn}
                        >
                            <input type="text" placeholder="Nickname" name="Cal" id="Cal" />
                            <CardContent
                                className={aaa.btnSave}
                            >
                                <CardContent
                                    className={aaa.btnInSave}
                                >
                                    <Button
                                        size="small"
                                        variant="contained"
                                        className={aaa.tmStyle}
                                    >
                                        Save
                                    </Button>
                                </CardContent>
                            </CardContent>
                            <input
                                className={aaa.colorSelect}
                                type="color"
                                name="color"
                                id="colors"
                            />
                            <label
                                className={aaa.lable}
                                For="colors"
                            >
                                <img
                                    className={aaa.imgAccess}
                                    src={color}
                                    alt="close"
                                    loading="lazy"
                                />
                            </label>
                        </CardContent>
                        <CardContent className={aaa.btnMain}>
                            <CardContent
                                style={{ width: "auto !important" }}
                                className={`${aaa.btnIn} ${aaa.ref}`}
                            >
                                <Button variant="contained">
                                    Refresh
                                </Button>
                            </CardContent>
                            <CardContent
                                style={{ width: "auto !important" }}
                                className={`${aaa.btnIn} ${aaa.unHide}`}
                            >
                                <Button variant="contained">
                                    Un-Hide
                                </Button>
                            </CardContent>
                            <CardContent
                                style={{ width: "auto !important" }}
                                className={`${aaa.btnIn} ${aaa.out}`}
                            >
                                <Button variant="contained">
                                    Logout
                                </Button>
                            </CardContent>
                        </CardContent>
                    </CardActions>
                </Card>
            </Stack>
        </>
    );
};

export default CalendarName;
