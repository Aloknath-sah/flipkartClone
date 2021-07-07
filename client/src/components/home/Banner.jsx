import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/Data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
});

export const Banner = () => {
  const classes = useStyle();
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
          style: {
              background: "#ffffff",
              color: "#494949",
              borderRadius: 0,
              margin: 0
          }
      }}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
};
