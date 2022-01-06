import React from "react";
import { makeStyles } from "@material-ui/styles";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Grid, Paper } from "@material-ui/core";
import Add from "./components/Add";
const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2} sm={2} md={3}>
          <Leftbar />
        </Grid>
        <Grid item xs={10} sm={10} md={6}>
          <Feed />
        </Grid>
        <Grid item md={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
};

export default App;
