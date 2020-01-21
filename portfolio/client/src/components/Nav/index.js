import React from "./node_modules/react";
import "./style.css";

function Nav() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Stephen Eric Sanders</a>
            </div>
            <div class="nav-content">
                <ul class="center hide-on-med-and-down">
                    <li><a href="#">Email: ericsanders5800@gmail.com</a></li>
                    <li><a href="https://github.com/BigECire">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/stephen-sanders-2bb95212a">Linkedin</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
