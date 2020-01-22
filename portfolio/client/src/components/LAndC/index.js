import React from "react";
import { Container, Row, Col } from "../Grid";

function LAndC({ title, link, gitHub, image, children }) {
    return (
        <Col>
            <ul>
                <li><a href="#">Email: ericsanders5800@gmail.com</a></li>
                <li><a href="https://github.com/BigECire">GitHub</a></li>
                <li><a href="https://linkedin.com/in/stephen-sanders-2bb95212a">Linkedin</a></li>
                <li><a href="https://docs.google.com/document/d/1e7eayAk612wsnw29ooIytjv7ZJnB2JsdpUp4b_1E9Uw/edit?usp=sharing">Resume</a></li>
            </ul>
        </Col>
    );
}

export default LAndC;