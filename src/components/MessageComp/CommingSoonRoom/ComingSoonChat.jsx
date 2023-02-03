import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import sem from "../img/LogoM.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from './Message.module.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function ComingSoonChat() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="chatsoon" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Coming Soon
                            </Typography>
                            <ImageListItem id="my-chatsoon">
                                <ReactTooltip
                                    anchorId="my-chatsoon"
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
                                    Bearish Group Chat
                                </Typography>
                            </Button>
                            <Typography className={classes.info}>
                                This feature is in the final stages of development. If you’re an
                                alpha user you can activate it by entering your alpha user code
                                below. If not, sit tight, alpha features and updates happen
                                every Friday.
                            </Typography>
                            <CardContent
                               className={classes.inputStyle}
                            >
                                <input
                                    type="text"
                                    placeholder="Enter Alpha Access Code"
                                    name="code"
                                    id="code"
                                />
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
