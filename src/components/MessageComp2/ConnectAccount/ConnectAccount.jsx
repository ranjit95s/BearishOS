import React, {useState} from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../../img/Close.svg";
import gt from "../../img/gt.svg";
import lt from "../../img/lt.svg";
import Slack from "../../img/LogoM.png";
import Skype from "../../img/LogoM.png";
import Imessage from "../../img/LogoM.png";
import AndroidSMS from "../../img/LogoM.png";
import Linkedin from "../../img/LogoM.png";
import TwitterDMs from "../../img/LogoM.png";
import GoogleChats from "../../img/LogoM.png";
import Teams from "../../img/LogoM.png";
import Messenger from "../../img/LogoM.png";
import WhatsAppBusiness from "../../img/LogoM.png";
import Discord from "../../img/LogoM.png";
import InstagramDMs from "../../img/LogoM.png";
import gear from "../../img/gear.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./ConnectAccount.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
const ConnectAccount = () =>  {
    const [moreSignUp, setMoreSignUp] = useState(false);
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Connect An Account
                            </Typography>
                            <ImageListItem
                            className={classes.IconFlex}
                            >
                                <img id="my-elemento15" src={gear} alt="close" loading="lazy" />
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-elemento15"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Manage Connections</span>
                                </ReactTooltip>
                                <img
                                    id="my-element16"
                                    className={classes.imgStyle}
                                    src={Close}
                                    alt="close"
                                    loading="lazy"
                                />
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element16"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={moreSignUp ? classes.spanHide : classes.signSection}>
                            <Button className={classes.signIn}>
                                <img src={Slack} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Slack
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Skype} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Skype
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Imessage} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    iMessage
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={AndroidSMS} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Android SMS
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Linkedin} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Linkedin
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={TwitterDMs} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Twitter DMs
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                        </CardActions>
                        <CardActions className={moreSignUp ? classes.signSection : classes.spanHide}>
                            <Button className={classes.signIn}>
                                <img src={GoogleChats} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Google Chats
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Teams} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Teams
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Messenger} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Messenger
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={WhatsAppBusiness} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    WhatsApp Business
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={Discord} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Discord
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                            <Button className={classes.signIn}>
                                <img src={InstagramDMs} alt="logoM" />
                                <Typography
                                    variant="h1"
                                    className={classes.signOption}
                                >
                                    Instagram DMs
                                    <span className={classes.spanStyle}>
                                        {" "}
                                        Alpha{" "}
                                    </span>
                                </Typography>
                            </Button>
                        </CardActions>
                        <Typography
                                    variant="h1"
                                    gap={'10px'}
                                    onClick={() => setMoreSignUp(moreSignUp ? false : true)}
                                    className={classes.moreback}
                                >
                                    {moreSignUp ? 'Back' : 'More'}
                                    <img src={moreSignUp ? lt : gt} alt="logoM" />
                                </Typography>
                        <Typography variant="h6" className={classes.t666}>
                            Alpha Intelligent Connections are only open to our Enterprise
                            Users at this time.
                        </Typography>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default ConnectAccount;