import React, { useState } from "react";
import { makeStyles, Box, Button, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

//component
import { LoginDialog } from "../login/LoginDialog";

const useStyle = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "unset",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px"
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    alignItems: "center",

    "& > *": {
      marginRight: 50,
      textDecoration: "none",
    },
  },
  container: {
    display: "flex",
    textDecoration: "none",
    color: "white",
    "& > *": {
      marginLeft: 10,
    },
  },
});

export const HeaderButton = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wrapper}>
      <Button
        varient="contained"
        className={classes.login}
        onClick={() => openLoginDialog()}
      >
        Login
      </Button>

      <Link to="/more">
        <Typography style={{color: "white"}}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};
