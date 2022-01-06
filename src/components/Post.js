import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import mac from "../images/macpro.jpeg";
import Add from "./Add";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: 25,
  },
}));
const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia image={mac} className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Macbook Pro
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            perferendis quo nesciunt delectus quae! Molestiae aliquam totam
            debitis cumque ad optio temporibus minima autem illum. Possimus,
            ipsam? Ad, ducimus quaerat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">Share</Button>
        <Button color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
