import React, {Component} from "react";
import "../stylesheets/about/aboutTheTeamStyle.css"
import PageTemplate from "../PageTemplate";
import Footer from "../Footer";

class AboutTheTeam extends Component {
    render() {
        console.log("Props for about");
        console.log(this.props);
        return (
            <div className="section-wrapper">
                <PageTemplate pageTitle={this.props.sectionName} pageSubtitle={this.props.subsection} pageInfo={this.props.sectionKeys} />
                <div id="about-team-paragraph-section">
                    <h1>About Our Team</h1>
                    <p>
                        We are the St. Ignatius High School Robotics Team (Falcotronix)
                    consisting of many enthusiastic students led by several dedicated
                    teachers at our school. The goal of Falcotronix is to promote
                    STEM education and FIRST Robotics not only in our school community, but in
                    the city of Thunder Bay.
                    </p>
                    <p>
                        Our team helps students develop
                        essential skills for the future in leadership and many academic fields.
                        Our devoted and experienced mentors teach students new skills
                        in leadership, marketing, engineering, communication, and critical
                        thinking.
                    </p>
                    <p>
                        As a newly formed team, we strive to continue to succeed
                        in official FIRST Robotics Competition events and, in time, form
                        a well established Robotics program at our school.
                    </p>
                    <p>
                        In the 2017 First Robotics Season, the Falcotronix Robotics Team
                        learned much from competing in two First Robotics Competition (FRC) events. As a
                        disadvantaged rookie team, the Falcotronix was learning to design,
                        build, and program a robot for the first time ever. Despite this, by the end
                        of the season, we found ourselves with a very competitive robot.
                    </p>
                    <p>
                        At our first competition in the beginning of March 2018, nine
                        members of Falcotronix travelled to Oshawa to represent not only
                        our school, but Thunder Bay as a whole.
                        Despite experiencing various technical difficulties over the duration
                        of the tournament, we are proud to have placed 16th out of a total 38
                        teams from all Ontario.
                    </p>
                    <p>
                        Inspired  by our success at the large event,
                        our team looked ambitiously towards our next FRC event in North Bay
                        later that same month and attempted to rework the shortcomings of the
                        robot. Unfortunately, with limited experience and time, we were unable
                        to find a definite fix for the robot and placed 29th out of the 32 teams at
                        the North Bay event.
                    </p>
                    <p>
                        After learning much from our first year, we look forward
                        to a successful second year. For the 2018/2019 FRC
                        season, we are excited to learn from our mistakes and helpful advice from
                        veteran teams and hope to not only attend another two FRC events, but
                        qualify of the Ontario Provincial event.
                    </p>
                    <div id="first-image"></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutTheTeam;