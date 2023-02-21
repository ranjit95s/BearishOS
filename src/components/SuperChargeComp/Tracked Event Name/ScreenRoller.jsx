import React, { useState } from "react";
import Stack from "@mui/material/Stack";

import aaa from "./TrackedEventName.module.css";
const ScreenRoller = ({ timer }) => {

    return (
        <>
            <Stack mb={'10px'} gap={"5px"} className={aaa.scroller}>
                <Stack gap={"2px"} direction={"row"} className={aaa.simgCap}>
                    {timer.map((t) => {
                        return (
                            <Stack key={t.title} gap={"2px"} className={aaa.timerSty}>
                                {t.img.map((i, index) => {
                                    return (
                                        // width & left depends
                                        <>
                                            {i.src ? (
                                                <Stack
                                                    style={{
                                                        left: `${i.imgTakenAt.charAt(
                                                            3
                                                        )}${i.imgTakenAt.charAt(4)}px`,
                                                        // width normally 24px
                                                        width:'24px'
                                                        // width: `calc(${i.inBtw[1].charAt(
                                                        //     3
                                                        // )}${i.inBtw[1].charAt(4)}px - ${i.inBtw[0].charAt(
                                                        //     3
                                                        // )}${i.inBtw[0].charAt(4)}px)`,
                                                    }}
                                                    key={index}
                                                    className={aaa.bg}
                                                >
                                                    {/* image display none for now */}
                                                    <img style={{"display":"none"}} src={i.src} alt="" />
                                                </Stack>
                                            ) : (
                                                ""
                                            )}
                                        </>
                                    );
                                })}
                                <Stack className={aaa.timerText}>{t.title}</Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </>
    );
};
export default ScreenRoller;
