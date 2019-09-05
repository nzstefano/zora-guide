import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    width: 80,
    height: 80
  }
});

export default function Pic() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Remy Sharp"
        imgSrc="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiEy9nGtrrkAhUC4o8KHdu5Du8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fgame-console-flat-app-icon-with-long-shadow-vector-3619140&psig=AOvVaw2C5oYlxMuZ4yX9hFtB4YH9&ust=1567798227805893"
        className={classes.avatar}
      />
    </Grid>
  );
}
