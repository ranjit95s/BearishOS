import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledEngineProvider } from "@mui/material/styles";
import aaa from "./workSMC.module.css";
export default function AccessDenied() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="accessDenied"
                    className={aaa.boxStyle}
                >
                    <Card className={aaa.boxIn}>
                        <CardContent className={aaa.headerStyle}>
                            <Typography variant="h1" className={aaa.mainT}>
                                Access Denied
                            </Typography>
                        </CardContent>
                        <CardContent className={aaa.headerStyle2}>
                            <Typography variant="h1" className={aaa.mainT2}>
                                Sorry, you don’t have access to this document. You can request
                                access from the creator below.
                            </Typography>
                        </CardContent>
                        <CardContent
                            className={aaa.btns}
                        >
                            <CardContent
                                className={aaa.btnIn}
                            >
                                <Button
                                    size="small"
                                    variant="contained"
                                >
                                    Requested Access
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
