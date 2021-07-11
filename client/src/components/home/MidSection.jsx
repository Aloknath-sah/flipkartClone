import React from 'react'
import { ImageURL } from '../../constants/Data'
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    wrapper: {
        display: "flex",
        marginTop: 20,
        justifyContent: "space-between"
    }
})

export const MidSection = () => {
    const classes = useStyle()
    return (
        <Box className={classes.wrapper} >
            {
                ImageURL.map((image) => (
                    <img src={image} style={{width: "33%"}} />
                ))
            }
        </Box>
    )
}
