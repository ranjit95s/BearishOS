import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import aaa from "./TrackedEventName.module.css";
import share from "../../img/shareG.svg";
import ScreenRoller from "./ScreenRoller";
import Close from "../../img/Close.svg";
import ScreenShot from "./ScreenShot";
import {CalendarWorkSpace} from '../../CalendarComp2One'
import TimeTrackingDetails from "./TimeTrackingDetails";
const TrackedEventName = () => {
    const [trackerTime, setTrackerTime] = useState([
        {
            title: "12AM",
            img: [
                { src: Close, inBtw: ["12:25", "12:59"], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["12:15", "12:25"], imgTakenAt: "12:15AM" },
            ],
        },
        {
            title: "1AM",
            img: [
                { src: Close, inBtw: ["12:00", "12:02"], imgTakenAt: "12:00AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "2AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "3AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "03:40AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "03:45AM" },
            ],
        },
        {
            title: "4AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "5AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "6AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "7AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "8AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "9AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "10AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "11AM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
        },
        {
            title: "12PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "1PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "2PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "3PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "4PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "5M",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "6PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "7PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "8PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "9PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "10PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
        {
            title: "11PM",
            img: [
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
                { src: false, inBtw: ["", ""], imgTakenAt: "12:25AM" },
            ],
            inBetween: ["12PM", "1PM"],
            imgTakenAt: "12:25PM",
        },
    ]);
    const [sharePopup, setSharePopup] = useState(false)
    return (
        <>
            <Stack component="tracker" className={aaa.boxStyle}>
                <Stack className={aaa.boxIn}>
                    <Stack
                        mt={"20px"}
                        mb={"20px"}
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Stack className={aaa.mainText}>Tracked Event Name</Stack>
                        <Stack
                            direction={"row"}
                            justifyContent={"start"}
                            gap={"10px"}
                            alignItems={"center"}
                            onClick={() => setSharePopup(sharePopup ? false : true)} style={{"position":"relative","cursor":"pointer"}}
                        >
                            <img width={"25px"} src={share} alt="" />
                            <Stack className={aaa.shareNow}>Share Now</Stack> 
                            {sharePopup &&
                            <Stack className={aaa.shareAbs}>
                                <CalendarWorkSpace/>
                            </Stack>}
                        </Stack>
                    </Stack>
                    <ScreenRoller timer={trackerTime} />
                    <Stack
                        direction={"row"}
                        justifyContent={"start"}
                        gap={"40px"}
                        alignItems={"flex-start"}
                    >
                        <ScreenShot />
                        <TimeTrackingDetails />
                    </Stack>
                    <Stack gap={'20px'} mt={'-25px'}>
                    <Stack className={aaa.mainText}>Details</Stack>
                    <Stack className={aaa.textareas}>
                        <textarea placeholder="Tell us what you are working on? What are you tracking? Did you add time manually? All your details go here." name="moreDetails"></textarea>
                    </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
export default TrackedEventName;
