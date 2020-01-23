import React from "react";
import { Container, Row, Col } from "../Grid";

function Card({ title, link, gitHub, image, children }) {
    return (
        <Col size="s4">
            <div class="card">
                <div class="card-image">
                    <img src={image} />
                </div>
                <div class="card-content">
                    <span class="card-title flow-text">{title}</span>
                    <p class="flow-text">{children}</p>
                </div>
                <div class="card-action">
                    <a className="orange-text text-accent-4" href={link}>Wedsite</a>
                    <a className="orange-text text-accent-4" href={gitHub}>GitHub</a>
                </div>
            </div>
        </Col>
    );
}
//Calendly.com/bjenkins-meeting

export default Card;