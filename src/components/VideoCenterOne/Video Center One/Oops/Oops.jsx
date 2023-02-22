import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../../img/Close.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import classes from './Oops.module.css'

const Oops = () => {

    return (
        <>
            <Box component="oops" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Oops!
                            </Typography>
                            <ImageListItem id="my-element19">
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Typography variant="h1" className={classes.oopst}>
                        The host has rejected your request to Join the meeting. Maybe you’re in the wrong one. Check your link and name again.
                            </Typography>
                        <CardActions className={classes.signSection}>
                            <CardContent className={classes.inputStyle}>
                                <input type="text" placeholder='Meeting Link' name="name" id="name" />
                            </CardContent>
                            <CardContent className={classes.cbtn}>
                                <CardContent className={classes.cbtnIn}>
                                    <Button variant="contained">
                                        Go
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
        </>
    );
}

export default Oops;