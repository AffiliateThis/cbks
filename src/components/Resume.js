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
              Team-oriented Application Solution Architect/ Web Developer with a background in digital 
              marketing and customer acquisition, with Full-Stack Certification from the University of 
              Richmond. Skilled in digital marketing tracking platforms, CRM and SAS implementation/
              configurations. A proven record of superb work-ethic, stellar customer service and able to 
              successfully collaborate with team members. Excellent ability in conveying complex technical 
              information in an easy to understand manner. Enjoys finding solutions to complex problems.
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
            Kount Command | Clickup | Confluence | Jira | Okta | LasPass | Hubspot | Node.Js | Express | Sequelize | JavaScript | jQuery | React | React-MDL | GIT | GitHub | MongoDB | MySQL | Firebase | Handlebars | HTML | CSS | Bootstrap | Media Queries | APIs | Microsoft Suite | Heroku | Google Apps | Mongoose |Sequelize | Chartjs | Cloudinary | Quickbooks | World Clock API | Axios 

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
              listItem="- Listen to clients business needs and provide solutions on how to best use the Digistore24 platform.
               "
              listItem2="- Train staff on tracking campaigns and how to best administratively operate the platform as well teach them to provide support to our clients."
              listItem3="- Collaborated with other Executives at Digistore and wrote the schematic that improved the entire Digistore24 Reporting Modules for clients."
              listItem4="- Solve complex tracking and site logistical problems for both internal staff as well as clients."
              listItem5="- Developed Strategies of best use of the Digistore Platform based on the business needs of Digistore24 clients."
              listItem6="- Suggested platform enhancements to better serve internal staff and clients."
              listItem7="- Collaborated with account management and business development to generate POA  to close to potential clients with how their 3rd party systems and business setups would best interact and function with the Digistore24 Platform."
              listItem8="- Provide integration support for 3rd party systems and how both systems should communicate and work together."
              listItem9="- Performed many demos via zoom calls to showcase to how best to use the platform while also providing examples of how the platform would work with the existing systems/processes."
              listItem10="- Staying up to date on trends on other systems that can work with Digistore24."
              listItem11="- Assisting in strategy of the US based Digistore24 and additional integration partnerships."
              listItem12="- Research, translate and write detailed  feature request specs  for enhancements to the Digistore24 platform based on either increasing revenue or enhancing operational stability."
              listItem13="- Work with the compliance and risk department to help setup processes and automation with 3rd party services including Kount.  "
              listItem14="- Wrote the documentation for API integration enhancements of Kount to better mitigate risk and better identify riskier transactions/personas."


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
              listItem2="- CRM Usage and implementation providing better tracking potential of customers and client-management."
              listItem3="- Successfully managed project site development build-outs for clients."
              listItem4="- Designed custom solutions and proposals  based on the needs of potential clients."
              listItem5="- Provided Weekly/Monthly kpi reports to clients depending on the agreement "
              listItem6="- Management and execution of SEO campaigns for clients providing them with more customer acquisitions and opportunity.  Organic traffic to our client's sites doubled within two months."
              listItem7="- Affiliate Program Launch Strategy and Management which significantly increased the number of sales for our clients."
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
              listItem4="- Was product owner/manager of an internal auto insurance site project that had geo target 
              validation, email validation and kpis metrics, all housed in a managed cloud environment.  The validations 
              were enabled via a custom script utilizing 3 different API’s, Geocodio, Maxmind and Briteverify.
              "
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
