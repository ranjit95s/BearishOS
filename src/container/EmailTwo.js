import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { StyledEngineProvider } from '@mui/material/styles';
import "@fontsource/source-serif-pro";
import Close from '../components/img/Close.png'
import attachment from '../components/img/attachment.png'
import LD from '../components/img/LD.png'
import link from '../components/img/link.png'
import remove from '../components/img/remove.png'
import Share from '../components/img/Share.png'
import trash from '../components/img/trash.png'
import aaa from './EmailTwo.module.css'

function EmailTwo() {
  const [style, setStyle] = useState(aaa.spanCC);
  const [style2, setStyle2] = useState(aaa.spanHide);

  const [style3, setStyle3] = useState(false);
  const [style4, setStyle4] = useState(false);
  const [style5, setStyle5] = useState(false);
  const [user1, setUser1] =   useState(false);
  const [user2, setUser2] =   useState(false);
  const [user3, setUser3] =   useState(false);

  const changeStyle = () => {
    setStyle(aaa.spanHide);
    setStyle2(aaa.composeBodyB);
    if(user1)
    setUser1( false);
    else
    setUser1(true);
  };

  const changeStyle2 = () => {
    if (style3) {
      setStyle3(false);
    }
    else {
      setStyle3(true);
    }
  };
  const changeStyle3 = () => {
    if (style4)
      setStyle4(false)
    else
      setStyle4(true)
  };
  const changeStyle4 = () => {
    if (style5)
      setStyle5(false)
    else
      setStyle5(true)
  };
  const changeStyle5 = () => {
      if(user2)
          setUser2(false)
      else 
          setUser2(true)
  };
  const changeStyle6 = () => {
      if(user3)
          setUser3(false)
      else 
          setUser3(true)
  };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box component="NewEmail2" className={aaa.main}>
          <Card className={aaa.mainStyle}>
            <CardContent className={aaa.headers}>
              <CardContent className={aaa.headerContent}>
                <ImageListItem id="my-element10"><img className={style5 ? aaa.alphaIcon : aaa.spanVis} src={Share} alt="hero" />
                  <ReactTooltip className={aaa.tooltip} anchorId="my-element10" type='light' effect='solid'>
                    <span>Share Email Alpha</span>
                  </ReactTooltip>
                </ImageListItem>
                <Typography className={style5 ? aaa.spanHide : aaa.tmsmStyle}>Subject</Typography>
              </CardContent>
              <CardContent className={aaa.headerContent}>
                <ImageListItem id="my-element12"><img src={remove} alt="hero" onClick={changeStyle4} className={aaa.imgStyle} />
                <ReactTooltip className={aaa.tooltip} anchorId="my-element12" type='light' effect='solid'>
                    <span>Minimize</span>
                  </ReactTooltip>
                </ImageListItem>
                
                <ImageListItem id="my-element13"><img src={Close} alt="hero" className={aaa.imgStyle} />
                <ReactTooltip className={aaa.tooltip} anchorId="my-element13" type='light' effect='solid'>
                    <span>Close</span>
                  </ReactTooltip>
                </ImageListItem>
                
              </CardContent>
            </CardContent>
            <CardContent className={style5 ? aaa.headerBody : aaa.spanHide}>
              <CardContent className={aaa.composeBody}>
                <Typography variant="h5" className={aaa.tmsmStyle}>From</Typography>
                <input type="text" name="fromId" id="userId" defaultValue="narutouzumaki2002@gmail.com" />
              </CardContent>
              <CardContent className={aaa.composeBodyB}>
                <Typography variant="h5" className={aaa.tmsmStyle}>To</Typography>
                <input type="text" name="toId" id="toId" onClick={changeStyle} />
                <Stack className={user1 ? aaa.abs :aaa.spanHide}>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                </Stack>
                <CardContent className={style}>
                  <Typography varient="h5" className={aaa.spanInv}>CC</Typography>
                  <Typography varient="h5" className={aaa.spanInv}>BCC</Typography>
                </CardContent>
              </CardContent>
              <CardContent className={style2} style={{ "display": "flex", "position": "relative" }}>
                <input onClick={changeStyle5} type="text" name="cc" id="cc" />
                <Typography className={aaa.spanInv} style={{ "marginRight": "15px" }}>CC</Typography>
                {/* <Stack className={user2 ? aaa.abs :aaa.spanHide}>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                </Stack> */}
              </CardContent>
              <CardContent className={style2} style={{ "display": "flex", "position": "relative" }}>
                <input onClick={changeStyle6} type="text" name="bcc" id="bcc" />
                <Typography className={aaa.spanInv} style={{ "marginRight": "15px" }}>BCC</Typography>
                {/* <Stack className={user3 ? aaa.abs :aaa.spanHide}>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={aaa.user}>
                    <Typography className={aaa.pic}>
                      TU
                    </Typography>
                    <CardContent className={aaa.padding0}>
                      <Typography className={aaa.fn}>
                        Full Name
                      </Typography>
                      <Typography className={aaa.em}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                </Stack> */}
              </CardContent>
              <CardContent className={aaa.composeBodyB}>
                <input type="text" name="subject" id="subject" placeholder='Subject' />
              </CardContent>
              <CardContent className={aaa.composeBody}>
                <textarea name="composeMain" id="composeMain"></textarea>
              </CardContent>
            </CardContent>
            <CardContent className={style5 ? aaa.composerLower :aaa.spanHide}>
              <CardContent className={aaa.composeBtns}>
                <CardContent className={aaa.composeBtns}>
                  <ImageListItem><img src={link} alt="hero" className={style3 ? aaa.bg : ''} onClick={changeStyle2} /></ImageListItem>
                  <CardContent className={style3 ? aaa.hoveroutStyle :aaa.spanHide}>
                    <CardContent className={aaa.hoverStyle}>
                      <CardContent style={{ "padding": "14px !important" }} className={aaa.hoverBody} >
                        <input placeholder="Https://" className={aaa.borderStyle} type="text" name="link" id="link" />
                        <CardContent className={aaa.btnStyle} style={{ "margin-top": "25px" }}>
                          <button className={aaa.btnStyles} onClick={changeStyle2}> Add Link </button>
                        </CardContent>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
                <CardContent className={aaa.composeBtns}>
                  <ImageListItem id="my-element14"><img src={attachment} className={aaa.alphaIcon} alt="hero" />
                  <ReactTooltip className={aaa.tooltip} anchorId="my-element14" type='light' effect='solid'>
                    <span>Add Attachment</span>
                  </ReactTooltip>
                  </ImageListItem>
                </CardContent>
                <CardContent className={aaa.composeBtns}>
                  <ImageListItem><img src={trash} alt="hero" /></ImageListItem>
                </CardContent>
                <CardContent className={aaa.composeBtnsB}>
                  <Typography onClick={changeStyle3} className={aaa.opc75}>Send</Typography>
                  <ImageListItem><img src={LD} className={aaa.LD} alt="hero" /></ImageListItem>
                  <CardContent className={style4 ? aaa.hoveroutStyle :aaa.spanHide}>
                    <CardContent className={aaa.hoverStyle2}>
                      <CardContent className={aaa.als}>
                        <Typography className={aaa.tmStyle}>Schedule Email</Typography>
                        <CardContent className={aaa.datetimeb}>
                          <CardContent className={aaa.tmStyle}>00/00/0000</CardContent>
                          <CardContent className={aaa.tmStyle}>00:00 AM</CardContent>
                        </CardContent>
                        <CardContent style={{"width":"100%"}} className={aaa.btnStyle}>
                          <Button className={aaa.btnStyles} onClick={changeStyle3}> Schedule Now </Button>
                        </CardContent>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </CardContent>
            </CardContent>
          </Card>
        </Box>
      </StyledEngineProvider>
    </>
  )
}

export default EmailTwo