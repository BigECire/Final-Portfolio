import React from "react";
//import "./style.css";

function Nav() {
    return (
        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">Stephen Eric Sanders</a>
            </div>
            <div class="nav-content">
                <ul class="center tabs tabs-transparent">
                    <li><a href="#">Email: ericsanders5800@gmail.com</a></li>
                    <li><a href="https://github.com/BigECire">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/stephen-sanders-2bb95212a">Linkedin</a></li>
                    <li><a href="https://docs.google.com/document/d/1e7eayAk612wsnw29ooIytjv7ZJnB2JsdpUp4b_1E9Uw/edit?usp=sharing">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
