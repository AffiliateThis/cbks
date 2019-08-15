import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          my col
          <div style={{ display: "flex" }}>{this.props.skills}</div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
