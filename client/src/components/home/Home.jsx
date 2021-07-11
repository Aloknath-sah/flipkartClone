import React from "react";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import { Box, makeStyles } from "@material-ui/core";
import { Slide } from "./Slide";
import { MidSection } from "./MidSection";

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "white",
    padding: 5,
    margin: "12px 0 0 10px"
  }
});

export const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{display: "flex"}}>
          <Box style={{width: "83%"}}>
            <Slide timer={true} title="Deal of the day" />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} style={{width: "230px"}} />
          </Box>
        </Box>
        <MidSection/>
        <Slide timer={false} title="Discounts for you" />
        <Slide timer={false} title="Suggested Item" />
        <Slide timer={false} title="Recomended Item" />
        <Slide timer={false} title="Best Sellers"/>
      </Box>
    </div>
  );
};
