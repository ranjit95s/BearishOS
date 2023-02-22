import * as React from 'react';
import Stack from '@mui/material/Stack';
import classes from './FirstLast.module.css';
import Close from '../../../img/Close.svg';

const FirstLast = () => {

    return (
        <>
            <Stack className={classes.boxStyle}>
                <Stack className={classes.boxIn}>
                <Stack className={classes.titleStyle}>
                            <Stack className={classes.t61825}>
                            First Name Last Name,
                            </Stack>
                            <Stack id="my-element19">
                                <img src={Close} alt="close" loading="lazy" />
                            </Stack>
                        </Stack>
                        <Stack className={classes.t31521}>
                        Has requested to join the meeting, their email address is `Email`.
                        </Stack>
                        <Stack direction={'row'} gap={'15px'} mt={'20px'}>
                            <Stack className={`${classes.tark} ${classes.a}`}>Accept</Stack>
                            <Stack className={`${classes.tark} ${classes.r}`}>Reject</Stack>
                            <Stack className={`${classes.tark} ${classes.k}`}>Ask to Wait</Stack>
                            <Stack></Stack>
                            <Stack></Stack>
                        </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default FirstLast;