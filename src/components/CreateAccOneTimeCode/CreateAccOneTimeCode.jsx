import React from 'react';
import Stack from '@mui/material/Stack';
import Close from '../img/Close.svg';
import classes from './CreateAccOneTimeCode.module.css'
const CreateAccOneTimeCode = () => {
    return (
        <>
            <Stack className={classes.bg}>
                <Stack className={classes.box}>
                    <Stack className={classes.boxIn}>
                        <Stack className={classes.close}>
                            <Stack className={classes.t1825}>One Time Access Code</Stack>
                            <img src={Close} alt='alt'/>
                        </Stack>
                        <Stack className={classes.subY}>
                        You're one time code was sent to
                        </Stack>
                        <Stack className={classes.num}>
                            451-123-5434
                        </Stack>
                        <Stack className={classes.inCode}>
                            <input type="text" placeholder="One Time Code" name="code" id="code" />
                        </Stack>
                        <Stack className={classes.btno}>
                            <Stack className={`${classes.red} ${classes.btn}`}>Resend Code</Stack>
                            <Stack className={classes.btn}>Verify</Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}
export default CreateAccOneTimeCode;