import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: "#F2F2F2"
    }
});

export const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
      </Box>
    </div>
  );
};
