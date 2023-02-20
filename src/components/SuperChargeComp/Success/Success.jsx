import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './Succee.module.css'
const Success = () => {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="SuccessCharge" className={classes.boxStyle}>
                <Card className={classes.boxIn}>
                    <CardContent className={classes.titleStyle}>
                        <Typography variant="h1" className={classes.t61825}>
                        Success
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.signSection}>
                    <Typography className={classes.th31521}>
                    Your recording has been successfully saved, you can view, edit, adjust, and share it from here.
                    </Typography>
                    </CardActions>
                    <CardContent className={classes.btn}>
                            <CardContent className={classes.btns}>
                                <Button variant="contained">
                                    Go to Supercharges
                                </Button>
                            </CardContent>
                        </CardContent>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}

export default Success;