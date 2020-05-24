import React from "react";
import styled from "styled-components/macro";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import yamas from "./yama";

const Contents = styled.div`
  background: #151515 url("/images/yarigadake.jpg") no-repeat fixed center
    bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 50px;
`;

const Header = styled.header`
  padding: 170px 30px 80px;
`;

const SiteTitle = styled.h1`
  margin: 50px 0 40px;
  font-size: 5rem;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      maxWidth: "512px",
      margin: "auto",
    },
    gridList: {
      margin: "auto",
    },
  })
);

export default function () {
  const classes = useStyles();

  return (
    <Contents>
      <Header>
        <SiteTitle>Tajiri Tozan</SiteTitle>
      </Header>
      <div className={classes.root}>
        <GridList
          cellHeight={768}
          className={classes.gridList}
          cols={1}
          spacing={100}
        >
          {yamas.map((yama) => (
            <GridListTile key={yama.img}>
              <img src={yama.img} alt={yama.title} />
              <GridListTileBar
                title={yama.title}
                subtitle={<span>{yama.description}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Contents>
  );
}
