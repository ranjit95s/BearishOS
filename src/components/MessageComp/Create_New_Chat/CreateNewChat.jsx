import React, {useState} from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../img/Close.svg";
import sem from "../../img/LogoM.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from './Message.module.css'
// import sty from "../sty.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CreateNewChat() {

    const [isAdd, setIsAdd] = useState('Contact Added');
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="createnewchat" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                            Create New Chat
                            </Typography>
                            <ImageListItem id="my-createnewchat">
                                <ReactTooltip
                                    anchorId="my-createnewchat"
                                    className={classes.tooltip}
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                        <Button className={classes.signIn}>
                                <img src={sem} alt="email" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}>
                                    New Bearish Chat
                                </Typography>
                            </Button>
                            <Typography className={classes.info}>
                            Who would you like to message?
                            </Typography>
                            <CardContent className={classes.titleStyle}>
                            <CardContent className={classes.head}>
                                        <Typography variant="h1" className={classes.textt}>
                                       {isAdd}
                                        </Typography>
                                        {/* DropDown here */}
                                    </CardContent>
                            </CardContent>
                            <CardContent className={classes.users} >
                                    <Typography variant="h5" className={classes.leftU}>
                                        <span className={classes.spanS}>TU</span> Full Name
                                    </Typography>
                                    <Typography variant="h6" className={classes.msg}>
                                    Messaging
                                    </Typography>
                                </CardContent>
                                <CardContent className={classes.btn}>
                                <CardContent className={classes.btns}>
                                    <Button variant="contained">
                                        Create
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
