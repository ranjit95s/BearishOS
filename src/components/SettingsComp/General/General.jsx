import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Logo from "../../img/LogoM1.jpg.png";
import info from '../../img/info1.svg'
import sq from '../../img/sq1.svg'
import sq2 from '../../img/sq2.svg'
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./general.module.css";
const General = () => {
    const [userData, setUserData] = useState({firstName:'',lastName:''});
    const [checkChecker, setCheckChecker] = useState({atomaticZone:false,idealLogout:true})
    const chc = (id) => {
        if (id === 1) {
            if (checkChecker.atomaticZone) {
                setCheckChecker({ ...checkChecker, atomaticZone: false });
            } else {
                setCheckChecker({ ...checkChecker, atomaticZone: true });
            }
        } else if (id === 2) {
            if (checkChecker.idealLogout) {
                setCheckChecker({ ...checkChecker, idealLogout: false });
            } else {
                setCheckChecker({ ...checkChecker, idealLogout: true });
            }
        }
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="general" className={classes.boxStyle}>
                    <Card className={classes.boxIn}>
                        <Stack className={classes.w100}>
                            <Stack className={classes.t61825}>Basic</Stack>
                            <hr></hr>
                            <Stack className={classes.flx}>
                                <Stack className={classes.pic}>
                                    {/* <img src={Logo} alt="" /> */}
                                    <Stack className={classes.LU}>LU</Stack>
                                </Stack>
                                <Stack className={classes.finput}>
                                    <input
                                        type="text"
                                        name="first"
                                        placeholder="First Name"
                                        id="first"
                                        onChange={(e) => setUserData({...userData, firstName:e.target.value})}
                                    />
                                    <input
                                        type="text"
                                        name="last"
                                        placeholder="Last Name"
                                        id="last"
                                        onChange={(e) => setUserData({...userData, lastName:e.target.value})}
                                    />
                                </Stack>
                            </Stack>
                            <Stack style={{"marginTop":"20px"}} className={classes.loggedEmail}>
                                <Stack className={classes.t61115}>
                                Login Email: fakeEmail.com
                                </Stack>
                            </Stack>
                            <Stack style={{"marginTop":"20px"}} className={classes.t61825}>Preferances</Stack>
                            <hr></hr>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Language:
                                    </Stack>
                                </Stack>
                                <img src={info} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Automatic Timezone:
                                    </Stack>
                                    <img onClick={() => chc(1)} src={checkChecker.atomaticZone ? sq2 : sq} alt="" />
                                </Stack>
                                <img src={info} alt="" />
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Ideal Logout
                                    </Stack>
                                    <img onClick={() => chc(2)} src={checkChecker.idealLogout ? sq2 : sq} alt="" />
                                </Stack>
                                <img src={info} alt="" />
                            </Stack>
                            <Stack className={classes.save}>
                                <Stack className={classes.saveIn}>
                                    Save
                                </Stack>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
};
export default General;
