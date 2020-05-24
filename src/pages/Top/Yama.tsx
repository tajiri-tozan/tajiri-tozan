import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 100,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 1000,
    },
    image: {
      width: "auto",
      Height: "500px",
    },
    img: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

type Props = {
  title: string;
  description: string;
  imgSrc: string;
};

export default function (props: Props) {
  const { title, description, imgSrc } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className={classes.image}>
            <LazyLoadImage className={classes.img} alt={title} src={imgSrc} />
          </Grid>
          <Grid item xs={12} sm container alignItems="center">
            <Grid item xs container direction="column" spacing={2}>
              <Typography gutterBottom variant="h4">
                {title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
