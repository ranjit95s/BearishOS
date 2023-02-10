import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./Fea.module.css";
const BearishFea = () =>  {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="firstConnect"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <CardContent className={classes.headerStyle}>
                            <Typography variant="h1" className={classes.mainT}>
                            Bearish OS Feature
                            </Typography>
                        </CardContent>
                        <CardContent className={classes.headerStyle2}>
                            <Typography variant="h1" className={classes.mainT2}>
                            In this Open Beta, Advanced Analytics only work with items stored in Bearish OS Drive.
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={classes.btns}
                        >
                            <CardContent
                                className={classes.btnIn}
                            >
                                <Button
                                style={{"width":"25px"}}
                                    size="small"
                                    variant="contained"
                                >
                                    Done
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default BearishFea;