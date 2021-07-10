import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/Data";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { width } from "@material-ui/system";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const useStyle = makeStyles({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: "#ffffff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
      fontSize: 22,
      fontWeight: 600
  }
});

export const Slide = () => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>Deal of the Day</Typography>
        <img src={timerURL} style={{ width: 24 }} />
        <Countdown date={Date.now() + 5.04e7} />
      </Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
      >
        {products.map((product) => (
          <>
            <img src={product.url} className={classes.image} />
          </>
        ))}
      </Carousel>
    </Box>
  );
};
