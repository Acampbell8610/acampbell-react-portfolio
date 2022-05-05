import React from 'react';
import coverImage from "../../assets/Profile Photo.png";

function About() {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" />
            <p>Full-stack developer with a background of security technologies for school systems. Currently earning a certificate in full stack development from University of Central Florida’s Coding Bootcamp, with newly developed skills in JavaScript, CSS, React.js,OOP, SQL, Express.js, Handlebars.js  and responsive web design. I have a passion for solving problems and creating organized code for future development. With each project, my aim is to become a more proficient developer. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences.

            </p>
        </section>
  
    );
}

export default About;