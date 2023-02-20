import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import classes from './SuperCharge.module.css';
export default function NameYourProj() {
   
    return (
        <>
                <Box component="namereco" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.signCal}>
                            <input type="text" placeholder='Name Your Tracking Session' name="code" id="code" />
                        </CardContent>
                        
                        <CardContent className={classes.bcreate}>
                            <CardContent className={classes.bbcreate}>
                                <Button variant="contained">
                                    Create
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
        </>
    );
}