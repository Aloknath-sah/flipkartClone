import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
  },
  log: {
    color: "white",
    margin: "30px 0 0 20px",
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > * ": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#FFFFFF",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#FFFFFF",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0",
  },
  createText: {
    textAlign: "center",
  },
});

const initialValue = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get access to your Order, Whistlist and Reccommendation."
    },
    signup: {
        view: "sign up",
        heading: "Looks like you are new here!",
        subHeading: "Looks like you are new here!"
    }
}

export const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [account, setAccount] = useState(initialValue.login);

  const toggleAccount = () => {
    setAccount(initialValue.signup);
  };

  const classes = useStyle();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography className={classes.log} variant="h5">
              {account.heading}
            </Typography>
            <Typography
              style={{
                margin: "15px 0 0 20px",
                fontSize: 20,
                color: "white",
                fontWeight: 600,
              }}
            >
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField name="username" label="Enter Email/Mobile number" />
              <TextField name="password" label="Enter Password" />
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's terms and use of privacy
                policy
              </Typography>
              <Button variant="contained" className={classes.loginBtn}>
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                onClick={() => toggleAccount()}
                className={classes.createText}
              >
                New to flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField name="firstname" label="Enter First name" />
              <TextField name="lastname" label="Enter Last name" />
              <TextField name="username" label="Enter Username" />
              <TextField name="email" label="Enter Email" />
              <TextField name="password" label="Enter Password" />
              <TextField name="phone" label="Enter Phone number" />
              <Button variant="contained" className={classes.requestBtn} >Request OTP</Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
