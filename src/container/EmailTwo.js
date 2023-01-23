import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import "@fontsource/source-serif-pro";
import Close from '../components/img/Close.png'
import attachment from '../components/img/attachment.png'
import LD from '../components/img/LD.png'
import link from '../components/img/link.png'
import remove from '../components/img/remove.png'
import Share from '../components/img/Share.png'
import trash from '../components/img/trash.png'
import sty from '../components/sty.module.css'
// import { ClassNames } from '@emotion/react';

function EmailTwo() {
  const [style, setStyle] = useState(cx(sty.spanInv));
  const [style2, setStyle2] = useState(cx(sty.spanHide, sty.spanInv));

  const [style3, setStyle3] = useState(false);
  const [style4, setStyle4] = useState(false);
  const [style5, setStyle5] = useState(false);
  // const [style6, setStyle6] = React.useState(false);

  const changeStyle = () => {
    setStyle(cx(sty.spanInv, sty.spanHide));
    setStyle2(cx(sty.composeBody, sty.borderBStyle, sty.spanShow, sty.spanInv));
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
  // const changeStyle5 = () => {
  //     if(style6)
  //         setStyle6(false)
  //     else 
  //         setStyle6(true)
  // };
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Box component="NewEmail2" className={cx(sty.main2)}>
          <Card className={cx(sty.mainStyle)}>
            <CardContent className={cx(sty.headers)}>
              <CardContent className={cx(sty.headerContent, sty.padding0)}>
                <ImageListItem id="my-element10"><img className={style5 ? cx(sty.halpha, sty.hello) : cx(sty.spanVis)} src={Share} alt="hero" />
                  <ReactTooltip className={sty.tooltip} anchorId="my-element10" type='light' effect='solid'>
                    <span>Share Email Alpha</span>
                  </ReactTooltip>
                </ImageListItem>
                <Typography className={style5 ? cx(sty.spanHide) : cx(sty.spanShow,sty.tmsmStyle)}>Subject</Typography>
              </CardContent>
              <CardContent className={cx(sty.headerContent, sty.padding0)}>
                <ImageListItem id="my-element12"><img src={remove} alt="hero" onClick={changeStyle4} className={cx(sty.imgStyle, sty.hmini, sty.padding0)} />
                <ReactTooltip className={sty.tooltip} anchorId="my-element12" type='light' effect='solid'>
                    <span>Minimize</span>
                  </ReactTooltip>
                </ImageListItem>
                
                <ImageListItem id="my-element13"><img src={Close} alt="hero" className={cx(sty.imgStyle, sty.padding0, sty.hcross)} />
                <ReactTooltip className={sty.tooltip} anchorId="my-element13" type='light' effect='solid'>
                    <span>Close</span>
                  </ReactTooltip>
                </ImageListItem>
                
              </CardContent>
            </CardContent>
            <CardContent className={style5 ? cx(sty.headerBody, sty.spanShow) : cx(sty.spanHide)}>
              <CardContent className={cx(sty.composeBody)}>
                <Typography variant="h5" className={sty.tmsmStyle}>From</Typography>
                {/* <input type="text" name="fromId" id="userId" defaultValue="narutouzumaki2002@gmail.com" /> */}
              </CardContent>
              <CardContent className={cx(sty.composeBody, sty.borderBStyle, sty.rel)}>
                <Typography variant="h5" className={sty.tmsmStyle}>To</Typography>
                <input type="text" name="toId" id="toId" onClick={changeStyle} />
                <Stack className={cx(sty.userData, sty.abs, sty.spanHide)}>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>

                </Stack>
                <CardContent className={style}>
                  <Typography varient="h5" className={cx(sty.spanInv)}>CC</Typography>
                  <Typography varient="h5" className={cx(sty.spanInv)}>BCC</Typography>
                </CardContent>
              </CardContent>
              <CardContent className={style2} style={{ "display": "flex", "position": "relative" }}>
                <input type="text" name="cc" id="cc" />
                <Typography className={cx(sty.spanInv)} style={{ "margin-right": "15px" }}>CC</Typography>
                <Stack className={cx(sty.userData, sty.abs, sty.spanHide)}>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>

                </Stack>
              </CardContent>
              <CardContent className={style2} style={{ "display": "flex", "position": "relative" }}>
                <input type="text" name="bcc" id="bcc" />
                <Typography className={cx(sty.spanInv)} style={{ "margin-right": "15px" }}>BCC</Typography>
                <Stack className={cx(sty.userData, sty.abs, sty.spanHide)}>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <CardContent className={cx(sty.user, sty.padding0)}>
                    <Typography className={cx(sty.pic)}>
                      TU
                    </Typography>
                    <CardContent className={cx(sty.userEmail, sty.padding0)}>
                      <Typography className={cx(sty.fn)}>
                        Full Name
                      </Typography>
                      <Typography className={cx(sty.em)}>
                        Email of user
                      </Typography>
                    </CardContent>
                  </CardContent>

                </Stack>
              </CardContent>
              <CardContent className={cx(sty.composeBody, sty.borderBStyle)}>
                <input type="text" name="subject" id="subject" placeholder='Subject' />
              </CardContent>
              <CardContent className={cx(sty.composeBody)}>
                <textarea name="composeMain" id="composeMain"></textarea>
              </CardContent>
            </CardContent>
            <CardContent className={style5 ? cx(sty.ComposeLower, sty.spanShow) : cx(sty.ComposeLower, sty.spanHide)}>
              <CardContent className={cx(sty.ComposeBtns)}>
                <CardContent className={cx(sty.ComposeBtns)}>
                  <ImageListItem><img src={link} alt="hero" className={style3 ? cx(sty.bg) : ''} onClick={changeStyle2} /></ImageListItem>
                  <CardContent className={style3 ? cx(sty.hoveroutStyle, sty.spanShow) : cx(sty.hoveroutStyle, sty.spanHide)}>
                    <CardContent className={cx(sty.hoverStyle, sty.comex)}>
                      <CardContent style={{ "padding": "14px !important" }} className={cx(sty.hoverBody, sty.comBtn)} >
                        <input placeholder="Https://" className={cx(sty.borderStyle)} type="text" name="link" id="link" />
                        <CardContent className={cx(sty.btnStyle)} style={{ "margin-top": "25px" }}>
                          <button className={cx(sty.btnStyles)} onClick={changeStyle2}> Add Link </button>
                        </CardContent>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
                <CardContent className={cx(sty.ComposeBtns)}>
                  <ImageListItem id="my-element14"><img src={attachment} className={cx(sty.hello)} alt="hero" />
                  <ReactTooltip className={sty.tooltip} anchorId="my-element14" type='light' effect='solid'>
                    <span>Add Attachment</span>
                  </ReactTooltip>
                  </ImageListItem>
                </CardContent>
                <CardContent className={cx(sty.ComposeBtns)}>
                  <ImageListItem><img src={trash} alt="hero" /></ImageListItem>
                </CardContent>
                <CardContent className={cx(sty.ComposeBtns, sty.borderStyle)}>
                  <Typography onClick={changeStyle3}>Send</Typography>
                  <ImageListItem><img src={LD} alt="hero" /></ImageListItem>
                  <CardContent className={style4 ? cx(sty.hoveroutStyle, sty.spanShow) : cx(sty.hoveroutStyle, sty.spanHide)}>
                    <CardContent className={cx(sty.hoverStyle, sty.comexx)}>
                      <CardContent className={cx(sty.hoverBody, sty.comBtn, sty.als)}>
                        <Typography className={cx(sty.tmStyle)}>Schedule Email</Typography>
                        <CardContent className={cx(sty.datetime, sty.borderStyle, sty.tmStyle)}>
                          <CardContent className={cx(sty.padding0)}>00/00/0000</CardContent>
                          <CardContent className={cx(sty.padding0)}>00:00 AM</CardContent>
                        </CardContent>
                        <CardContent className={cx(sty.btnStyle, sty.w100)}>
                          <Button className={cx(sty.btnStyles)} onClick={changeStyle3}> Schedule Now </Button>
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