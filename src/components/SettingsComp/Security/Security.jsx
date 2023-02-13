import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import info from '../../img/info1.svg'
import sq from '../../img/sq1.svg'
import sq2 from '../../img/sq2.svg'
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./security.module.css";
const Security = () =>  {
    const [userData, setUserData] = useState({password:''});
    const [checkChecker, setCheckChecker] = useState({Authentication:false,Contentlock:true})
    const chc = (id) => {
        if (id === 1) {
            if (checkChecker.Authentication) {
                setCheckChecker({ ...checkChecker, Authentication: false });
            } else {
                setCheckChecker({ ...checkChecker, Authentication: true });
            }
        } else if (id === 2) {
            if (checkChecker.Contentlock) {
                setCheckChecker({ ...checkChecker, Contentlock: false });
            } else {
                setCheckChecker({ ...checkChecker, Contentlock: true });
            }
        }
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
            <Box component="general" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <Stack className={classes.w100}>
                            <Stack style={{"marginTop":"20px"}} className={classes.t61825}>Security</Stack>
                            <hr></hr>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Your Password:
                                    </Stack>
                                    <Stack className={classes.finput}>
                                    <input
                                        type="password"
                                        name="pass"
                                        placeholder="********"
                                        id="first"
                                        onChange={(e) => setUserData({...userData, password:e.target.value})}
                                    />
                                </Stack>
                                </Stack>
                                <Stack className={classes.changepass}>Change Now</Stack>
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Setup 2-Factor Authentication
                                    </Stack>
                                    <img onClick={() => chc(1)} src={checkChecker.Authentication ? sq2 : sq} alt="" />
                                </Stack>
                                <img src={info} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Allow for single content lock
                                    </Stack>
                                    <img onClick={() => chc(2)} src={checkChecker.Contentlock ? sq2 : sq} alt="" />
                                </Stack>
                                <img src={info} alt="" />
                            </Stack>
                            <Stack style={{"marginTop":"40px"}} className={classes.t61825}>Recent Sign-Ons</Stack>
                            <Stack className={classes.tableStyle}>
                                <table>
                                    <tr>
                                        <th>Browser</th>
                                        <th>Location</th>
                                        <th>iP Address</th>
                                        <th style={{"width":"20%"}}>Time</th>
                                    </tr>
                                    <tr>
                                        <td>Chrome</td>
                                        <td>San Francisco, CA</td>
                                        <td>121.2132.2132324.</td>
                                        <td>00-00-0000 00:00</td>
                                    </tr>
                                    <tr>
                                        <td>Chrome</td>
                                        <td>San Francisco, CA</td>
                                        <td>121.2132.2132324.</td>
                                        <td>00-00-0000 00:00</td>
                                    </tr>
                                </table>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default Security;