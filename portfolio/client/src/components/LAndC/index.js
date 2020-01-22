import React from "react";
import { Container, Row, Col } from "../Grid";

function LAndC({ title, link }) {
    return (
        <Row>
            <Col size="s2">
            </Col>
            <Col size="s4">
                <ul>
                    <li><a className="orange-text text-accent-4" href="#">Email: ericsanders5800@gmail.com</a></li>
                    <li><a className="orange-text text-accent-4" href="https://github.com/BigECire">GitHub</a></li>
                </ul>
            </Col>
            <Col size="s2">
            </Col>
            <Col size="s4">
                <ul>
                    <li><a className="orange-text text-accent-4" href="https://linkedin.com/in/stephen-sanders-2bb95212a">Linkedin</a></li>
                    <li><a className="orange-text text-accent-4" href="https://docs.google.com/document/d/1e7eayAk612wsnw29ooIytjv7ZJnB2JsdpUp4b_1E9Uw/edit?usp=sharing">Resume</a></li>
                </ul>
            </Col>
        </Row>
    );
}

export default LAndC;