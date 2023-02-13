import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../../img/LogoM1.jpg.png";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Close from '../../img/Close.svg';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./TranquilAI.module.css";
const TranquilAI = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="TranquilAI"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <Stack className={classes.w100}>
                            <Stack style={{"marginTop":"22px"}} className={classes.t61825}> Tranquil AI </Stack>
                            <hr></hr>
                            <Stack className={classes.t61115}>Analytics and Controls</Stack>
                    </Stack>
                    </Card>
                    <Stack className={classes.popup}>

                    
                    <Stack component="popup" className={classes.boxStyle1}>
                <Card className={classes.boxIn1}>
                    <CardContent className={classes.titleStyle}>
                        <Stack  className={classes.t61825}>
                        Tranquil AI
                        </Stack>
                        <Stack id="my-popup">
                                <img src={Close} alt="close" loading="lazy" />
                            </Stack>
                    </CardContent>
                    <CardActions className={classes.signSection}>
                    <Button className={classes.signIn}>
                        <img src={Logo} alt="email" />
                        <Stack 
                                    className={classes.signOption}>
                           Bearish OS
                        </Stack>
                    </Button>
                    <Stack  className={classes.info} >
                    Tranquil AI provides powerful tools to help power you and your team 
                    forward, while avoiding burnout. Tranquil AI is currently in early 
                    Alpha testing, and will be released as a FREE update to all users soon.
                    </Stack>
                    <CardActions className={classes.cobtn}>
                            <Button className={classes.flexdl2}>
                                <Stack
                                    
                                    className={classes.tsty}
                                >
                               Get Notified when it’s live
                                </Stack>
                            </Button>
                        </CardActions>
                    </CardActions>
                </Card>
            </Stack>
            </Stack>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default TranquilAI;