import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

// import images from "./images";
// import imageLoader from './images';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* add image import function */}
            <img
              src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                {" "}
                HTML/CSS | Bootstrap | Javascript | React | Express | MongoDB |
                NodeJs |{" "}
              </p>
              <div className=" social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/chriskautz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" arial-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/AffiliateThis"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" arial-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
