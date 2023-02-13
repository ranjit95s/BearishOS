import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Logo from "../../img/LogoM1.jpg.png";
import Stack from "@mui/material/Stack";
import { StyledEngineProvider } from "@mui/material/styles";
import classes from "./AdminConsole.module.css";
const AdminConsole = () =>  {
    const [userData, setUserData] = useState({companyName:''});
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box
                    component="AdminConsole"
                    className={classes.boxStyle}
                >
                    <Card className={classes.boxIn}>
                    <Stack className={classes.w100}>
                            <Stack style={{"marginTop":"20px"}} className={classes.t61825}>Admin Console</Stack>
                            <hr></hr>
                            <Stack className={classes.flx}>
                                <Stack className={classes.pic}>
                                    <img src={Logo} alt="" />
                                    {/* <Stack className={classes.LU}>LU</Stack> */}
                                </Stack>
                                <Stack className={classes.finput}>
                                    <input
                                        type="text"
                                        name="first"
                                        placeholder="Company Name"
                                        id="first"
                                        onChange={(e) => setUserData({...userData, companyName:e.target.value})}
                                    />
                                </Stack>
                            </Stack>
                            <Stack className={classes.fp}>
                                <Stack className={classes.loggedEmail}>
                                    <Stack className={classes.t61115}>
                                    Company Email:
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack style={{"marginTop":"20px"}} className={classes.adS}>
                                <Stack className={classes.t61825}>Adminstrators</Stack>
                                <Stack className={classes.upbtn}>Add Bearish OS User</Stack>
                            </Stack>
                            <hr></hr>
                            <Stack className={classes.tableStyle}>
                                <table>
                                    <tr>
                                        <th>User Image</th>
                                        <th style={{"width":"25%"}}>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th style={{"width":"17%"}}>Manage</th>
                                    </tr>
                                    <tr>
                                        <td> <Stack style={{"margin":"auto"}} className={classes.pic}>
                                    <img src={Logo} alt="" />
                                    {/* <Stack className={classes.LU}>LU</Stack> */}
                                </Stack></td>
                                        <td>First and Last</td>
                                        <td>fake@email.com</td>
                                        <td>Admin</td>
                                        <td style={{"color":'red'}}>Revoke</td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style={{"color":'red'}}></td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td style={{"color":'red'}}></td>
                                    </tr>
                                </table>
                            </Stack>

                            <Stack style={{"marginTop":"20px"}} className={classes.adS}>
                                <Stack className={classes.t61825}>All User</Stack>
                            </Stack>
                            <hr></hr>
                            <Stack className={classes.tableStyle}>
                                <table>
                                    <tr>
                                        <th style={{"width":"20%"}}>Name</th>
                                        <th style={{"width":"30%"}}>Department & Team</th>
                                        <th>Access Level</th>
                                        <th>Cost</th>
                                        <th style={{"width":"17%"}}>Manage</th>
                                    </tr>
                                    <tr>
                                        <td>First Name</td>
                                        <td>Product Marketing Bear Team</td>
                                        <td>Admin</td>
                                        <td>$00.00</td>
                                        <td style={{"color":'red'}}>Revoke</td>
                                    </tr>
                                </table>
                            </Stack>
                        </Stack>
                    </Card>
                </Box>
                <Box component="monthlyBill" className={classes.boxStyle3}>
                    <Card className={classes.boxIn3}>
                    <Stack style={{"marginTop":"20px"}} className={classes.t618252}>Monthly Bill</Stack>
                    <Stack className={classes.items}>
                        <Stack className={classes.itemList}>
                            <Stack style={{"width":"90px"}} className={classes.tlist}>Team Members</Stack>
                            <Stack className={classes.tlist}>0000</Stack>
                            <Stack className={classes.tlist}>x</Stack>
                            <Stack className={classes.tlist}>$0000</Stack>
                        </Stack>
                        <Stack className={classes.itemList}>
                            <Stack style={{"width":"90px"}} className={classes.tlist}>Admin</Stack>
                            <Stack className={classes.tlist}>0000</Stack>
                            <Stack className={classes.tlist}>x</Stack>
                            <Stack className={classes.tlist}>$0000</Stack>
                        </Stack>
                        <Stack className={classes.itemList}>
                            <Stack style={{"width":"90px"}} className={classes.tlist}>Team Lead</Stack>
                            <Stack className={classes.tlist}>0000</Stack>
                            <Stack className={classes.tlist}>x</Stack>
                            <Stack className={classes.tlist}>$0000</Stack>
                        </Stack>
                    </Stack>
                    <Stack style={{"marginTop":"20px"}} className={classes.itemList}>
                            <Stack className={classes.tlist}>Monthly Cost</Stack>
                            <Stack className={classes.tlist}>$0000</Stack>
                        </Stack>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}
export default AdminConsole;