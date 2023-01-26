import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.svg';
import Typography from '@mui/material/Typography';
import cx from 'classnames';
import sty from '../sty.module.css';
import styt from './TaskCenter.module.css';
export default function TaskCenter({pin}) {
    const [addClass, setAddClass] = useState(false);
    const classAdd = () => {
        if (addClass) {
            setAddClass(false);
        }
        else {
            setAddClass(true);
        }
    };

    return (
        <>
          <ImageListItem key={pin.id} onClick={classAdd} className={addClass ? cx(styt.imgu,styt.bgop) : styt.imgu}>
                                <img src={pin.src} className={styt.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={styt.mainS}>
                            {pin.name}
                        </Typography>
                        </ImageListItem>
        </>
    );
}
