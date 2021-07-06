import React from 'react'
import {AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core'

const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subUrl: {
        marginLeft: 4,
        width: 10
    }
})

export const Header = () => {
    const classes = useStyle()
    const logoUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
    const subUrl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <img src={logoUrl} className={classes.logo} />
                <Typography>Explore Plus</Typography>
                <img src={subUrl} className={classes.subUrl} />
            </Toolbar>
        </AppBar>
    )
}
