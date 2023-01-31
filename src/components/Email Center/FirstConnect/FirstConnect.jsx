import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import sem from "../img/sem.png";
import ex from "../img/smallEx.png";
import sol from "../img/sol.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from './FirstConnect.module.css'
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function FirstConnect() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Connect An Account
                            </Typography>
                            <ImageListItem id="firstConnect">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="firstConnect"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt={''} loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={classes.signSection}>
                            <Button className={classes.signIn}>
                                <img src={sem} alt={''} />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Google Gmail
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={sol} alt={''} />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Microsoft Outlook
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={ex} alt={''} />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Microsoft Exchange
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Soon{" "}
                                    </span>
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
