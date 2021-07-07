import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";

//components
import { SearchBar } from "./SearchBar";
import { HeaderButton } from "./HeaderButton";

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 64,
  },
  logo: {
    width: 75,
  },
  subUrl: {
    marginLeft: 4,
    width: 10,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
      marginLeft: "12%",
      lineHeight: 0.5
  },
  subheading: {
      fontSize: 13,
      fontStyle: "italic"
  }
});

export const Header = () => {
  const classes = useStyle();
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Box className={classes.component}>
          <img src={logoUrl} className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subheading} > Join <Box component="span" style={{color: "#ffe11b", fontWeight: "bold"}}> Plus</Box> </Typography>
            <img src={subUrl} className={classes.subUrl} />
          </Box>
        </Box>
        <SearchBar/>
        <HeaderButton/>
      </Toolbar>
    </AppBar>
  );
};
