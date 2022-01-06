import React from "react";
import { makeStyles } from "@material-ui/styles";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  top: {
    padding: "20px",
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
