import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../../constants/Data";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
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
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    marginRight: 25,
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 15px",
  },
});

export const Slide = ({ timer, title }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds} left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}> {title} </Typography>
        {timer && (
          <>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View all
            </Button>
          </>
        )}
      </Box>
      <Divider />
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
          <Box textAlign="center" className={classes.wrapper}>
            <img src={product.url} className={classes.image} />
            <Typography
              className={classes.text}
              style={{ fontWeight: 600, color: "#212121" }}
            >
              {" "}
              {product.title.shortTitle}{" "}
            </Typography>
            <Typography className={classes.text} style={{ color: "green" }}>
              {" "}
              {product.discount}{" "}
            </Typography>
            <Typography
              className={classes.text}
              style={{ color: "#212121", opacity: 0.6 }}
            >
              {" "}
              {product.tagline}{" "}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
