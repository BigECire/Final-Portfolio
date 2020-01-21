import React from "./node_modules/react";
import { Container, Row, Col } from "./Grid";

function Card({ title, link, gitHub, image, children }) {
    return (
        <Col>
            <div class="card">
                <div class="card-image">
                    <img src={image} />
                    <span class="card-title">{title}</span>
                </div>
                <div class="card-content">
                    <p>{children}</p>
                </div>
                <div class="card-action">
                    <a href={link}>Wedsite</a>
                    <a href={gitHub}>GitHub</a>
                </div>
            </div>
        </Col>
    );
}
//Calendly.com/bjenkins-meeting

export default Card;