import React from "react";
import { makeStyles, Box, Button, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "unset",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    alignItems: "center",

    "& > *": {
      marginRight: 50,
      textDecoration: "none"
    },
  },
  container: {
    display: "flex",
    textDecoration:"none",
    color: "white",
    "& > *": {
      marginLeft: 10,
    },
  },
});

export const HeaderButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Link to="/login" > <Button varient="contained" className={classes.login}>
        Login
      </Button>
      </Link>
      <Link to="/more" ><Typography>More</Typography></Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography>Cart</Typography>
      </Link>
    </Box>
  );
};
