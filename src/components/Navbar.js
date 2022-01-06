import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import MailIcon from "@material-ui/icons/Mail";
import { NotificationAdd } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  nav: {
    position: "sticky",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    //     justifyContent: "space-between",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
    cursor: "pointer",
  },
  searchBtn: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "block"),
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge1: {
    marginLeft: "15px",
  },
  badge2: {
    marginLeft: "15px",
  },
  avatar: {
    marginLeft: "15px",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Mui-respnsive
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          MUI
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel onClick={() => setOpen(false)} className={classes.cancel} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge1}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge2}>
            <NotificationAdd />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
