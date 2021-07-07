import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/Data';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: "100%"
    }
})

export const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel>
            {
                bannerData.map( (image) => (
                    <img src={image} className={classes.image} />
                ) )
            }
        </Carousel>
    )
}
