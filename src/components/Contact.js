import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Form from "./Form";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Christian B. Kautz-Scanavy</h2>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                paddingBottom: "1em"
                
              }}
            >
              Team Oriented Web Developer with a background in digital marketing
              and tracking customer acquisition, with a Full-Stack Certificate
              from the University of Richmond. Skilled in digital marketing
              tracking platforms, CRM and SAS implementation/configurations,
              HTML, CSS, JavaScript, Bootstrap, MERN Stack, and React. I am able
              to work in fast paced environments and collaborate with others on
              multiple projects/tasks. I am making the switch to web development
              from marketing because I want to complete projects, collaborate
              more and be more involved with what makes applications work.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (804) 357-1353
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    c@chrisks.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
