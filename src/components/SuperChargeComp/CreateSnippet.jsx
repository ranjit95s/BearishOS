import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import plus from '../img/add1.svg';
import edit from '../img/edit.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import stySC from './superC.module.css';
import calSty from '../CalendarComp3/CalComp_Sty.module.css'
import styCC from '../CallCenter2/CallCenter.module.css'
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import logoM from '../img/LogoM.png'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function CrateSnippet() {
    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
    setInputValue(event.target.value);
    };
    
    const submitValue = () => {
        if(inputValue === '')
        setInputValue(inputValue + '[Luffy] ')
        else
        setInputValue(inputValue + ' [Luffy] ')
        // console.log(inputValue);
    }

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "width": "300px","height":"fit-content" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{"height":"fit-content"}}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Create Snippet
                            </Typography>
                            <ImageListItem id="my-element5330">
                                <ReactTooltip
                                    className={sty.tooltip}
                                    anchorId="my-element5330"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Typography className={cx(stySC.th31521,stySC.mt5)}>
                        Snippets let you easily copy and past small templates places.
                    </Typography>
                    <CardContent className={cx(sty.signIn,stySC.mt5, stySC.signCal, calSty.tmr, stySC.ttstyle, sty.inputStyle, sty.NickStyle, calSty.op1)}>
                            <input type="text" placeholder='Name your Snippet' name="code" id="code" />
                        </CardContent>
                        <CardContent className={cx(styCC.textS,stySC.mt5, styCC.inputStyle, sty.NickStyle,styCC.mrt)}>
                            <textarea onChange={onChangeHandler}
   value={inputValue} type="text" col="2" className={cx(styCC.ta)} placeholder='Type your snippet here. Add text boxes, where thing change like dats, names, or places.' name="code" id="code" />
                        </CardContent>
                        <Stack className={cx(calSty.mainStack, calSty.mt10, calSty.jcs)}>
                            <CardContent
                                style={{ "margin-left": "0px","padding-bottom":"inherit" }}
                                className={cx(
                                    sty.ComposeBtns,
                                    sty.borderStyle,
                                )}
                                onClick={submitValue}
                            >
                                <ImageListItem>
                                    <img src={plus} alt="hero" />
                                </ImageListItem>
                                <Typography
                                    className={cx(styCC.tls1521, sty.pl4, sty.padding0,calSty.op1)}
                                >
                                    Add Text Box
                                </Typography>
                                
                            </CardContent>
                        </Stack>
                        <CardContent style={{"margin-bottom":"10px"}} className={cx(sty.btns, stySC.cbtn1,calSty.jce)}>
                            <CardContent className={cx(sty.btnIn, stySC.ttstyle, sty.ref, stySC.cbtn, calSty.op1)}>
                                <Button variant="contained" className={cx(stySC.ttstyle)}>
                                    Create
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}