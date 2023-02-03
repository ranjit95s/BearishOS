import React, {useState} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import cx from 'classnames';
import classes from './TaskCenter.module.css';
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
          <ImageListItem key={pin.id} onClick={classAdd} className={addClass ? classes.imgu22 : classes.imgu}>
                                <img src={pin.src} className={classes.imgStyle} alt="close" loading="lazy" />
                                <Typography variant="h5" className={classes.mainS}>
                            {pin.name}
                        </Typography>
                        </ImageListItem>
        </>
    );
}
