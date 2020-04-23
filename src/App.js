import React from "react";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />

      <h3 style={{ textAlign: "center" }}>Shop our freshly prepared items.</h3>

      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={2}></Grid>

          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2}></Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
