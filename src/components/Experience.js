import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
          <p>{this.props.listItem}</p>
          <p>{this.props.listItem2}</p>
          <p>{this.props.listItem3}</p>
          <p>{this.props.listItem4}</p>
          <p>{this.props.listItem5}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
