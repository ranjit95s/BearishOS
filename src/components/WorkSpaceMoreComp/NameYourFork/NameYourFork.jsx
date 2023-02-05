import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import aaa from "./NameYourFork.module.css";
export default function NameYourFork() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" className={aaa.boxStyle}>
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography varient="h1" className={aaa.t1215}>
                                Name your Fork
                            </Typography>
                        </CardContent>

                        <CardActions className={aaa.signSec}>
                            <CardContent
                                className={aaa.inputStyle}
                            >
                                <input
                                    type="text"
                                    placeholder="Fork of Document"
                                    name="name"
                                    id="code"
                                />
                                <CardContent
                                    className={aaa.btn}
                                    style={{ "margin-top": "0px" }}
                                >
                                    <CardContent
                                        className={aaa.btnIn}
                                    >
                                        <Button
                                            size="small"
                                            variant="contained"
                                        >
                                            Go
                                        </Button>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
