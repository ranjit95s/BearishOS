import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty4 from './CalSty4.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Congt() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty4.boxWH3)}>
                    <Card className={cx(sty.inStyle, calSty4.boxIn3)}>
                    <CardContent className={cx(calSty4.headerStyle2)}>
                    <Typography varient="h1" className={cx(calSty4.tcongt)}>
                    Congradulations!
                            </Typography>
                            <ImageListItem id="my-element62">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element62"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                    </CardContent>
                    <Typography className={cx(calSty4.tseccStyle,calSty4.tlc)}>
                    You’re scheduling link is live and ready to go.
                    </Typography>
                    <Typography className={cx(calSty4.tseccStyle,calSty4.tlc)}>
                    app.bearishos.com/name/custom
                    </Typography>
                    <CardActions className={cx(calSty4.cobtn)}>
                            <Button className={cx(calSty4.flexdl2)}>
                                <Typography
                                    varient="h1"
                                    className={cx(calSty4.tsecStyle)}
                                >
                                Copy Link
                                </Typography>
                                
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}