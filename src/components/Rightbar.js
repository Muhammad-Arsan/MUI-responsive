import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles((theme) => ({
  top: {
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginRight: "20px",
    // textAlign: "center",
    position: "sticky",
    top: 0,
  },
  items: {
    listStyle: "none",
    textDecoration: "none",
    fontSize: 20,
    color: "grey",
    // fontWeight: "bold",
    marginRight: 10,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Typography>Online Friends</Typography>
      <AvatarGroup max={5} style={{ marginBottom: 20 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography gutterBottom>Gallery</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
            loading="lazy"
            alt="image"
          />
        </ImageListItem>
      </ImageList>
      <Typography gutterBottom style={{ marginTop: "10px" }}>
        Categories
      </Typography>
      <BrowserRouter>
        <Link className={classes.items}>Sports</Link>

        <Link className={classes.items}>Travel</Link>
        <Link className={classes.items}>Food</Link>
        <Divider />
        <Link className={classes.items}>Books</Link>

        <Link className={classes.items}>Nature</Link>

        <Link className={classes.items}>Tech</Link>
      </BrowserRouter>
    </div>
  );
};

export default Rightbar;
