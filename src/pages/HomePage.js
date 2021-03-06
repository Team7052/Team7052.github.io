import React, { Component } from 'react';
import "../stylesheets/homeStyle.css";
import "../stylesheets/global/globalStyle.css"
import Footer from "../Footer";
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-main-container">
                    { /* Create main background blurred image --> */ }
                    <div className="home-main-background-image"></div>
                    { /* Create navigation bar --> */ }
                    { /* Content that is in the home page, when user first loads screen --> */ }
                    <div id="home-main-text-container">
                        <div id="home-main-title">Falcotronix</div>
                        <p id="home-main-subtitle">
                            Team 7052 is a competitive robotics team from St. Ignatius High School and provides opportunities for all students to experience real world engineering through robotics.
                        </p>
                        <p id="home-main-location">Located in Thunder Bay, Ontario</p>
                    </div>
                </div>

                { /*About page screen */ }
                <div className="home-subsection" id="home-about-section">
                    <h1>About Us</h1>
                    <p>Falcotronix is a high school robotics team from St. Ignatius. We are part of FIRST Robotics, a world-wide high school robotics competition. Our mission is to promote STEM (Science, Technology, Engineering and Math) education in a team environment across Northwestern Ontario.</p>
                    <Link className="underlined-link" to="/about/team">Read More</Link>
                    <div id="home-about-image"></div>
                </div>

                { /* Outreach page screen Hide outreach section temporarily */ }
                { /* <div className="home-subsection" id="home-outreach-section">
                    <h1>Outreach</h1>
                    <p>We are always looking to impact as many people in STEM education as possible. Yearly, we go onto countless community outreach events. This summer, we are running the first ever Falcotronix Summer Camp where students from grades 5 - 8 will learn how to build small robots from scratch.</p>
                    <Link className="underlined-link" to="#">Read More</Link>
                    <div id="home-outreach-image"></div>
                </div> */ }

                <div className="home-subsection" id="home-media-section">
                    <div id="home-media-background-image"></div>
                    <div id="home-media-row">
                        <h1>Media</h1>
                        <img id="facebookLogo" src="/images/socialMediaLogos/facebook.png" alt="Facebook Logo"/>
                        <img id="instagramLogo" src="/images/socialMediaLogos/instagram.png" alt="Instagram Logo"/>
                        <img id="youtubeLogo" src="/images/socialMediaLogos/youtube.png" alt="Youtube Logo"/>
                        <Link id="galleryLink" to="media/gallery" className="custom-underlined-link">Gallery</Link>
                    </div>
                </div>

                <div className="home-subsection" id="home-sponsors-section">
                    <h1>Sponsors</h1>
                    <div id="home-sponsor-images-container">
                        <img className="home-sponsor-image" id="home-sponsor-image1" src="/images/lakehead.png" alt="Lakehead Logo"/>
                        <img className="home-sponsor-image" id="home-sponsor-image2" src="/images/concollege.png" alt="Confederation College Logo"/>
                    </div>
                    <Link to="sponsors/platinum" className="underlined-link">See all</Link>
                </div>
                <Footer type="grayed"/>
            </div>
        );
    }
}

export default HomePage;