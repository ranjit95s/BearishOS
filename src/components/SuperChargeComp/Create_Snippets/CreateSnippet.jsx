import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageListItem from "@mui/material/ImageListItem";
import Close from "../img/Close.svg";
import plus from "../img/add1.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "./createSnippet.module.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Tooltip as ReactTooltip } from "react-tooltip";
export default function CrateSnippet() {
    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const submitValue = () => {
        if (inputValue === "") setInputValue(inputValue + "[Luffy] ");
        else setInputValue(inputValue + " [Luffy] ");
        // console.log(inputValue);
    };

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <CardContent className={classes.titleStyle}>
                            <Typography variant="h1" className={classes.t61825}>
                                Create Snippet
                            </Typography>
                            <ImageListItem id="my-element5330">
                                <ReactTooltip
                                    className={classes.tooltip}
                                    anchorId="my-element5330"
                                    type="light"
                                    effect="solid"
                                >
                                    <span>Close</span>
                                </ReactTooltip>
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Typography className={classes.tm5}>
                            Snippets let you easily copy and past small templates places.
                        </Typography>
                        <CardContent className={classes.textIn}>
                            <input
                                type="text"
                                placeholder="Name your Snippet"
                                name="code"
                                id="code"
                            />
                        </CardContent>
                        <CardContent
                            className={
                                classes.textA
                            }
                        >
                            <textarea
                                onChange={onChangeHandler}
                                value={inputValue}
                                type="text"
                                col="2"
                                placeholder="Type your snippet here. Add text boxes, where thing change like dats, names, or places."
                                name="code"
                                id="code"
                            />
                        </CardContent>
                        <Stack className={classes.mainStack}>
                            <CardContent
                                className={classes.addBtn}
                                onClick={submitValue}
                            >
                                <ImageListItem>
                                    <img src={plus} className={classes.img} alt="hero" />
                                </ImageListItem>
                                <Typography
                                    className={classes.addt}
                                >
                                    Add Text Box
                                </Typography>
                            </CardContent>
                        </Stack>
                        <CardContent
                            className={classes.btn}
                        >
                            <CardContent
                                className={classes.btns}
                            >
                                <Button variant="contained">
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
