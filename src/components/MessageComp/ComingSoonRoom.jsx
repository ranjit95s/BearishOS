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
import cx from "classnames";
import { StyledEngineProvider } from "@mui/material/styles";
import sty from "../sty.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function ComingSoonRoom() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="AlphaAccess" className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Coming Soon
                            </Typography>
                            <ImageListItem id="my-element04">
                                <ReactTooltip
                                    anchorId="my-element04"
                                    className={sty.tooltip}
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Button className={cx(sty.signIn, sty.tlStyle)}>
                                <img src={sem} alt="email" />
                                <Typography
                                    varient="h1"
                                    className={cx(sty.inText, sty.tmStyle)}
                                >
                                    Bearish Group Room
                                </Typography>
                            </Button>
                            <Typography className={cx(sty.info, sty.tsStyle)}>
                            This feature is in the final stages of development. If you’re an
                             alpha user you can activate it by entering your alpha 
                            user code below. If not, sit tight, alpha features and updates happen every Friday.
                            </Typography>
                            <CardContent
                                className={cx(sty.signIn, sty.tmStyle, sty.inputStyle)}
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
