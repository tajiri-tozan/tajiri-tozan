import React from "react";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 50,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 1000,
    },
    image: {
      width: 256,
      height: 256,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  })
);

type Props = {
  animation: Animation.SlideInLeft | Animation.SlideInRight;
  title: string;
  description: string;
  imgSrc: string;
};

export default function (props: Props) {
  const { animation, title, description, imgSrc } = props;
  const classes = useStyles();

  return (
    <Reveal animation={animation}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <img className={classes.img} alt={title} src={imgSrc} />
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
    </Reveal>
  );
}
