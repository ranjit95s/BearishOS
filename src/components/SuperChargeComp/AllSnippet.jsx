import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import search from '../img/search.svg';
import edit from '../img/edit1.svg';
import edit23 from '../img/edit23.svg';
import cy from '../img/copy1.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import stySC from './superC.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import logoM from '../img/LogoM.png'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Message() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "width": "310px", "height": "fit-content" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "height": "fit-content" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                All Snippets
                            </Typography>
                            <ImageListItem id="my-element5230">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element5230"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={cx(stySC.signIn1, sty.tmStyle, stySC.inputStyle, sty.NickStyle, stySC.c)}>
                            <CardContent className={stySC.df}>
                                <ImageListItem style={{ "margin-right": "8px" }}>
                                    <img src={search} alt="close" loading="lazy" />
                                </ImageListItem>
                                <CardContent className={cx(sty.padding0, calSty.tmr, stySC.ttstyle, stySC.inputStyle, sty.NickStyle, calSty.op1)}>
                                    <input type="text" className={stySC.ttstyle} placeholder='Search Snippets' name="code" id="code" />
                                </CardContent>
                            </CardContent>
                            <CardContent className={cx(sty.padding0)} style={{ "margin-top": "0px" }}>
                                <ImageListItem style={{ "margin-right": "8px" }}>
                                    <img src={edit} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        </CardContent>
                        <CardContent className={cx(sty.padding0, sty.flexWS)}>
                            <Stack className={cx(stySC.fff, sty.userInfo, sty.tmsmStyle, sty.padding0)}>
                                <Typography variant="h5" className={cx(stySC.th1521, sty.padding0)}>
                                    Snippet Name
                                </Typography>
                                <CardContent style={{ "display": "flex" }} className={sty.padding0}>
                                    <ImageListItem >
                                        <img src={edit23} alt="dad" loading="lazy" className={stySC.mr2525} />
                                        <Typography variant="h5" className={cx(stySC.ttstyle3, sty.padding0)}>
                                            Edit
                                        </Typography>
                                    </ImageListItem>
                                    <ImageListItem style={{ "margin-left": "10px" }}>
                                        <img src={cy} alt="dad" loading="lazy" className={stySC.mr2525} />
                                        <Typography variant="h5" className={cx(stySC.ttstyle3, sty.padding0)}>
                                            Copy
                                        </Typography>
                                    </ImageListItem>
                                </CardContent>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}