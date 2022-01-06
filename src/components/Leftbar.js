import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, List, Typography } from "@material-ui/core";
import {
  Camera,
  Collections,
  Home,
  ListAlt,
  Person,
  Place,
  PlayCircleFilledOutlined,
  Settings,
  TabletMac,
} from "@material-ui/icons";
import { Logout } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  items: {
    display: "flex",

    alignItems: "center",
    marginBottom: 40,
    cursor: "pointer",
  },
  top: {
    position: "sticky",
    top: 0,
    paddingTop: "20px",
    backgroundColor: "darkBlue",
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "grey",
      borderRight: "1px solid #ece7e7",
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    marginLeft: "10px",
    fontWeight: 500,
  },
  icon: {
    [theme.breakpoints.down("md")]: {},
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.top}>
      <div className={classes.items}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div>
      <div className={classes.items}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.items}>
        <ListAlt className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.items}>
        <Camera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.items}>
        <PlayCircleFilledOutlined className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.items}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.items}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.items}>
        <Place className={classes.icon} />
        <Typography className={classes.text}>Markete Place</Typography>
      </div>
      <div className={classes.items}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.items}>
        <Logout className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
