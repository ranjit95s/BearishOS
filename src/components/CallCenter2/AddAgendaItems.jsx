import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import dad from '../img/dad.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import styCC from './CallCenter.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function AddAgendaItems() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "fit-content" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "height": "fit-content" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Add an Agenda Item
                            </Typography>
                            <ImageListItem id="my-element500">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element500"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <Typography className={cx(sty.info2, sty.tmsmStyle)}>
                                Agenda items help to structure your meetings. Add them below.
                            </Typography>
                        </CardActions>
                        <CardContent className={cx(styCC.textS, styCC.inputStyle, sty.NickStyle,styCC.mrt)}>
                            <textarea type="text" col="2" className={cx(styCC.ta)} placeholder='Type your agenda item here' name="code" id="code" />
                        </CardContent>
                        <CardContent className={styCC.mainf}>
                            <CardContent className={styCC.mainff}>
                            <Typography varient="h1" className={cx(styCC.ts1317)}>
                                Time
                            </Typography>
                            <CardContent
                                    
                                    className={cx(
                                        styCC.textS,
                                        styCC.ts1317,
                                        styCC.inputs,
                                        sty.NickStyle
                                    )}
                                >
                                    <input
                                        type="number"
                                        placeholder="00:00"
                                        name="code"
                                        style={{"width":"100%","outline":"none","border":"none"}}
                                        id="code"
                                    />
                                </CardContent>
                            <ImageListItem id="my-element5700">
                                <ReactTooltip
                                    className={cx(sty.tooltip,styCC.extra)}
                                    anchorId="my-element5700"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Add the rough amount of time this agenda item should take in the meeting</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                            </CardContent>
                            <CardContent className={styCC.padding0}>
                            <CardContent
                                        className={cx(
                                            sty.ComposeBtns,
                                            sty.borderStyle,
                                            styCC.tls1521,
                                            sty.padding0,
                                            
                                        )}
                                    >
                                        <Typography
                                            className={cx(styCC.tls1521, sty.pl4, sty.padding0)}
                                        >
                                            Add Now
                                        </Typography>
                                        <ImageListItem>
                                            <img src={dad} alt="hero" />
                                        </ImageListItem>
                                       
                                    </CardContent>
                            </CardContent>
                        </CardContent>
                        <Stack className={cx(calSty.mainStack, calSty.mt10, calSty.jce)}>
                            <CardContent className={cx(sty.btns, calSty.saved)} style={{ "margin-top": "19px","margin-bottom":"10px" }}>
                                <CardContent className={cx(sty.btnIn, sty.tmStyle, sty.ref, calSty.saved)}>
                                    <Button style={{"width":"124px"}} variant="contained" className={cx(sty.tmStyle)}>
                                        Add Another
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}