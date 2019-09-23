import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link, Router } from "react-router-dom";
import ReactDOM from 'react-dom';
// import Router from 'react-router';

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-5DVD5DF"
};

TagManager.initialize(tagManagerArgs);

const app = document.getElementById("app");
// ReactDOM.render(<Router routes={routes} />, app);

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: "none", color: "whitesmoke" }}
                to="/"
              >
                CBKS Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="./resume">Resume</Link>

              <Link to="./projects">Projects</Link>
              <Link to="./contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <Link to="./resume">Resume</Link>

              <Link to="./projects">Projects</Link>
              <Link to="./contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
