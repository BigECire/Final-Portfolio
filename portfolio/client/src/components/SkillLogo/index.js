import React from "./node_modules/react";

function Card({ title, link, gitHub, image, children }) {
    return (
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
    );
}

export default Card;