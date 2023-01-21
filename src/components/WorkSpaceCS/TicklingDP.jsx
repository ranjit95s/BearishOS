import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import sem from '../img/sdbox.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function TicklingDP() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="TicklingtheBackendGmail" className={cx(sty.boxStyle)} style={{"height":"200px"}}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                        Tickling the Backend
                        </Typography>
                        <ImageListItem >
                            <img src={Close} alt="close" loading="lazy" />
                        </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Dropbox
                        </Typography>
                    </Button>
                    <Typography variant="h1" className={cx(sty.info,sty.tsStyle)}>
                        This page should automatically redirect for you to login to Dropbox.
                    </Typography>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}