import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="avatar"
                style={{ height: "200px" }}
                className="resAvatar"
              />
            </div>
            <h3
              className="resName"
              style={{ paddingTop: "2em", color: "grey" }}
            >
              Christian B. Kautz-Scanavy
            </h3>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p
              className="
            brandInfo"
            >
              Team-oriented Web Developer and Solutions' Analyst with a background in digital marketing
              and customer acquisition, with Full-Stack Certification from the
              University of Richmond. Skilled in digital marketing tracking
              platforms, CRM and SAS implementation/configurations. A proven
              record of a superb work-ethic, stellar customer service and able
              to successfully collaborate with team members. Excellent ability
              in conveying complex technical information in an easy to
              understand manner.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone:</h5>
            <p className="contactInfo">(804) 357-1353</p>
            <h5>Email:</h5>
            <p className="contactInfo">c@chrisks.com</p>
            <h5>Website:</h5>
            <p className="contactInfo">chrisks.com</p>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>

            <h5 className="resSkills">
              Kount Command | Clckup | Confluence | Jira | Okta | LasPass |Node.Js | Express | Sequelize | JavaScript | jQuery | React | GIT
              | GitHub | MongoDB | MySQL | Firebase | Handlebars | HTML | CSS |
              Bootstrap | Media Queries | APIs | Microsoft Suite | Heroku |
              Google Apps | Mongoose |Sequelize | Chartjs | Cloudinary |
              Quickbooks | MDL | World Clock API | Axios | Ajax
            </h5>

            <hr style={{ borderTop: "3px solid #791dc1" }} />

            <h3>Experience</h3>

            <Experience
              className="description"
              startYear={2019}
              endYear={false}
              jobName="Digistore24, Inc | Application Support Manager "
              achievements="Achievements:  Successfully helped increase Digistore24, Inc 
              from a few million annually to many millions per month both from helping revenue generating channels grow to implementing processes and integrations for scalability.
              "
              listItem=" - Provide Guidance to both Vendors and Affiliates, and Internal Digistore24 staff. "
              listItem2="- Solve complex tracking and site logistical problems."
              listItem3="- Provide Integration Support for 3rd Party systems."
              listItem4="- Staying up to date on trends and other systems that can work with Digistore24."
              listItem5="- Assisting in strategy of the US based Digistore24 and additional integration partnerships."
              listItem6=" - Writing detailed specs for feature request enhancements to the Digistore24 platform based on either increasing revenue or enhancing operational stability."
               listItem7=" - Working with the Compliance and Risk Department to help setup processes and automation with 3rd party services including Kount."
            />

            <Experience
              className="description"
              startYear={2019}
              endYear={false}
              jobName="Self-Employed | Freelance Developer "
              achievements="Achievements:  Provides outstanding development expertise to clients for ongoing and one-time projects.
              "
              listItem=" - Continued to research and educate on additional skills. "
              listItem2="- Built my own ReactJS site in React-MDL site."
              listItem3="- Uses Github to manage commits and house projects and sites."
              listItem4="- Setup hosting environments that included traditional cpanel as well as Heroku and Cloudflare DNS."
              listItem5="- Building a React site for a client with customized components, and designed with Photoshop."
            />

            <Experience
              className="description"
              startYear={2018}
              endYear={2019}
              jobName="One Crooked Tree | Operations Coordinator/Project Manager "
              achievements="Achievements: Significantly increased traffic to clients websites via SEO practices, thereby increasing sales.
              "
              listItem=" - Effectively managed the Email Newsletter generation and deployment for publishers while tracking QA and pixel implementation. "
              listItem2="- Usage and implementation providing better tracking potential of customers and client-management."
              listItem3="- Successfully managed project site development build-outs for clients."
              listItem4="- Management and execution of SEO campaigns for clients providing them with more customer acquisitions and opportunity.  Organic traffic to our client's sites doubled within two months."
              listItem5="- Affiliate Program Launch Strategy and Management which significantly increased the number of sales for our clients."
            />

            <Experience
              className="description"
              startYear={2017}
              endYear={2019}
              jobName="AC Nutryst | Operations and Project Management"
              achievements="Achievements: Increased client revenue streams by up to 400%.   
          "
              listItem=" - Effectively hired and trained contractors to fulfill internal initiatives;  while also configuring tracking platforms to proficiently track metrics and profits. "
              listItem2="- Utilized Project Management to get assets built for clients and internal project site build-outs providing a more streamlined and efficient end product. 
              "
              listItem3="- Engineered validation synchronization for an internal insurance site"
            />

            <Experience
              className="description"
              startYear={2014}
              endYear={2017}
              jobName="Affiliate Crossing | Operations and Campaign Manager"
              achievements="Achievements: Increased our clients' revenues by approximately 300%."
              listItem="- Successfully managed staff and workflows and developed processes and procedures that improved efficiency. "
              listItem2="- Coordinated payment logistics of publishing channels"
              listItem3="- Configuring SAS as needed for cost savings and to accomplish more tasks. "
            />

            <hr style={{ borderTop: "3px solid #791dc1" }} />

            <h3>Education</h3>
            <Education
              className="schoolInfo"
              startYear={2019}
              endYear={2019}
              schoolName="The University of Richmond"
              degree="Full Stack Web Development | Coding Certificate"
              schoolDescription="An intensive boot camp program focused on gaining 
              web development skills in HTML, CSS, JQuery, JavaScript, MySQL Databases, 
              MongoDB, Express, NodeJS and React. 
              "
            />

            <Education
              className="schoolInfo"
              startYear={1996}
              endYear={2000}
              schoolName="Hampden-Sydney College"
              degree="Bachelor of Arts in History and French"
              schoolDescription="An intensive boot camp program focused on gaining 
              web development skills in HTML, CSS, JQuery, JavaScript, MySQL Databases, 
              MongoDB, Express, NodeJS and React. 
              "
            />
            <hr style={{ borderTop: "3px solid #791dc1" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
