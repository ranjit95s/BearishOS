import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Click from '../img/mos.svg';
import Text from '../img/A.svg';
import Line from '../img/gremove.svg';
import Triangle from '../img/tri.svg';
import Circle from '../img/Close.svg';
import Square from '../img/sq.svg';
import Arrow from '../img/gaf.svg';
import Write from '../img/gedit.svg';
import Upload from '../img/ggal.svg';
import Erase from '../img/pin.svg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import Clock from '../img/oclock.svg';
import Pri from '../img/pbb.svg';
import Priv from '../img/privacy.svg';
import lab from '../img/otag.svg';
import repo from '../img/opro.svg';
import Appro from '../img/mso.svg';
import add from '../img/addCO.svg';
import attach from '../img/attacho.svg';
import deletes from '../img/rtrash.svg';

import AddImage from '../img/mgoo.svg';
import AddVideo from '../img/ovid.svg';
import Download from '../img/odoc.svg';
import Print from '../img/cardo.svg';
import Comments from '../img/pdoco.svg';
import call from '../img/ovid1.svg';
import openM from '../img/msgo.svg';

import sCall from '../img/bvideo.svg';
import sEmail from '../img/bmail.svg';
import newT from '../img/bcheck.svg';
import newN from '../img/bdoc.svg';
import CreateE from '../img/bcal.svg';
import Agg from '../img/Close.svg';

import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import TaskCenterC from './TaskCenterC'
import { StyledEngineProvider } from '@mui/material/styles';
import styt from './TaskCenter.module.css';
export default function TaskCenterM() {

    const task4 = [{'id':'1','src':sCall,'name':'Start Call'},
        {'id':'2','src':sEmail,'name':'Send Email'},
        {'id':'3','src':newT,'name':'New Task'},
        {'id':'4','src':newN,'name':'New Note'},
        {'id':'5','src':CreateE,'name':'Create Event'},
        {'id':'2','src':Agg,'name':'Assigne'},
        ];

    const task3 = [{'id':'1','src':AddImage,'name':'Add Image'},
        {'id':'2','src':AddVideo,'name':'Add Video'},
        {'id':'3','src':Download,'name':'Download'},
        {'id':'4','src':Print,'name':'Print'},
        {'id':'5','src':Comments,'name':'Comments'},
        {'id':'2','src':call,'name':'Start a Call'},
        {'id':'7','src':openM,'name':'Open Messages'},
        ];

    const task2 = [{'id':'1','src':Clock,'name':'Due Date'},
        {'id':'2','src':Pri,'name':'Priority'},
        {'id':'3','src':Priv,'name':'Assignee'},
        {'id':'4','src':lab,'name':'Label'},
        {'id':'5','src':repo,'name':'Reporter'},
        {'id':'2','src':Appro,'name':'Approval'},
        {'id':'7','src':add,'name':'Add'},
        {'id':'8','src':attach,'name':'Attach'},
        {'id':'9','src':deletes,'name':'Delete'}];

        const task1 = [{'id':'1','src':Click,'name':'Click'},
        {'id':'2','src':Text,'name':'Text'},
        {'id':'3','src':Line,'name':'Line'},
        {'id':'4','src':Triangle,'name':'Triangle'},
        {'id':'5','src':Circle,'name':'Circle'},
        {'id':'2','src':Square,'name':'Square'},
        {'id':'7','src':Arrow,'name':'Arrow'},
        {'id':'8','src':Write,'name':'Write'},
        {'id':'9','src':Upload,'name':'Upload'},
        {'id':'10','src':Erase,'name':'Erase'},];
   
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="Task" className={cx(styt.padding0,styt.mp)}>
                    <Card className={cx(styt.taskStyle)}>
                        <Typography variant="h5" className={styt.mainT}>
                            Tools
                        </Typography>
                        {task1?.map((pin) => <TaskCenterC key={pin.id} pin={pin} />)}
                    </Card>
                    <Card style={{"width":"94px"}} className={cx(styt.taskStyle2)}>
                        <Typography variant="h5" className={styt.mainT}>
                        Bulk Edit
                        </Typography>
                        {task2?.map((pin) => <TaskCenterC key={pin.id} pin={pin} />)}
                    </Card>
                    <Card style={{"width":"120px"}} className={cx(styt.taskStyle)}>
                        <Typography variant="h5" className={styt.mainT}>
                            Tools
                        </Typography>
                        {task3?.map((pin) => <TaskCenterC key={pin.id} pin={pin} />)}
                    </Card>
                    <Card style={{"width":"120px"}} className={cx(styt.taskStyle3)}>
                        <Typography variant="h5" className={styt.mainT}>
                            Tools
                        </Typography>
                        {task4?.map((pin) => <TaskCenterC key={pin.id} pin={pin} />)}
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}