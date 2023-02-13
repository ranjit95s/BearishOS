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
import classes from "./HandShakeAI.module.css";
const HandShakeAI = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="HandShakeAI"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <Stack className={classes.w100}>
                            <Stack style={{"marginTop":"22px"}} className={classes.t61825}>Handshake AI</Stack>
                            <hr></hr>
                            <Stack className={classes.t61115}>Analytics and Controls</Stack>
                    </Stack>
                    </Card>
                    <Stack className={classes.popup}>

                    
                    <Stack component="popup" className={classes.boxStyle1}>
                <Card className={classes.boxIn1}>
                    <CardContent className={classes.titleStyle}>
                        <Stack  className={classes.t61825}>
                        Handshake AI
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
                    While all users have full access to our Handshake AI, options and 
                    controls are only open to Enterprise plans at this time.
                    </Stack>
                    <CardActions className={classes.cobtn}>
                            <Button className={classes.flexdl2}>
                                <Stack
                                    
                                    className={classes.tsty}
                                >
                                Contact Sales
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
export default HandShakeAI;