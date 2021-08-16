import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";



class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>

         
          
          <p>
            {this.props.startYear} - {this.props.endYear};

            
            
          </p>
        </Cell> 
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.jobName}</h4>
          <p>{this.props.achievements}</p>
          <p>{this.props.listItem}</p>
          <p>{this.props.listItem2}</p>
          <p>{this.props.listItem3}</p>
          <p>{this.props.listItem4}</p>
          <p>{this.props.listItem5}</p>
          <p>{this.props.listItem6}</p>
          <p>{this.props.listItem7}</p>
          <p>{this.props.listItem8}</p>
          <p>{this.props.listItem9}</p>
          <p>{this.props.listItem10}</p>
          <p>{this.props.listItem11}</p>
          <p>{this.props.listItem12}</p>
          <p>{this.props.listItem13}</p>
          <p>{this.props.listItem14}</p>
          <p>{this.props.listItem15}</p>
          <p>{this.props.listItem16}</p>







        </Cell>
      </Grid>
    );
  }
}

export default Experience;
