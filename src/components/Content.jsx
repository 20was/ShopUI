import React from "react";
import SimpleCard from "./Card";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "../Data";
const Content = () => {
  const list = coffeeMakerList;
  console.log(list);
  return (
    <Grid container spacing={2}>
      {list.map((l) => (
        <Grid item xs={12} sm={4}>
          <SimpleCard
            title={l.title}
            subTitle={l.price}
            imgSrc={l.imageUrl}
            description={l.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
