import React from "react";
import { makeStyles, Box, Button, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

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
    },
  },
  container: {
    display: "flex",
    "& > *": {
      marginLeft: 10,
    },
  },
});

export const HeaderButton = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button varient="contained" className={classes.login}>
        Login
      </Button>
      <Typography>More</Typography>
      <Box className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography>Cart</Typography>
      </Box>
    </Box>
  );
};
