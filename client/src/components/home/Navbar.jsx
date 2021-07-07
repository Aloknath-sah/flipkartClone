import React from "react";
import { navData } from "../../constants/Data";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        display: "flex",
        margin: "55px 130px 0 130px",
    },
    container: {
        textAlign: "center", 
        padding: "12px 8px",
        cursor: "pointer"
    },
    image: {
        width: "60%"
    },
    text: {
        fontWeight: 600,
        fontSize: 14
    }
})

export const Navbar = () => {
    const classes = useStyle()
  return (
    <Box className={classes.component}>
      {
        navData.map((item) => (
        <Box className={classes.container} >
          <img src={item.url} className={classes.image} />
          <Typography className={classes.text}> {item.text} </Typography>
        </Box>
        ))
      }
    </Box>
  );
};
