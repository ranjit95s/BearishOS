import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../../img/Close.svg';
import search from '../../img/search.svg';
import edit from '../../img/edit1.svg';
import edit23 from '../../img/edit23.svg';
import cy from '../../img/copy1.svg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import stySC from './superC.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './AllSnippet.module.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function AllSnippet() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                All Snippets
                            </Typography>
                            <ImageListItem id="my-element5230">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element5230"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardContent className={classes.sim1}>
                            <CardContent className={classes.df}>
                                <ImageListItem style={{ "marginRight": "8px" }}>
                                    <img src={search} alt="close" loading="lazy" />
                                </ImageListItem>
                                <CardContent className={classes.searcgM}>
                                    <input type="text" placeholder='Search Snippets' name="code" id="code" />
                                </CardContent>
                            </CardContent>
                            <CardContent className={classes.padding0m0}>
                                <ImageListItem style={{ "marginRight": "8px" }}>
                                    <img src={edit} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        </CardContent>
                        <CardContent className={classes.flexWS}>
                            <Stack className={classes.userStyle}>
                                <Typography variant="h5" className={classes.th1521}>
                                    Snippet Name
                                </Typography>
                                <CardContent className={classes.fp0}>
                                    <ImageListItem >
                                        <img src={edit23} alt="dad" loading="lazy" className={stySC.mr2525} />
                                        <Typography variant="h5" className={classes.bt}>
                                            Edit
                                        </Typography>
                                    </ImageListItem>
                                    <ImageListItem style={{ "margin-left": "10px" }}>
                                        <img src={cy} alt="dad" loading="lazy" className={stySC.mr2525} />
                                        <Typography variant="h5" className={classes.bt}>
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