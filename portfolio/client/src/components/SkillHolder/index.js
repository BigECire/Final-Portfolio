import React from "react";

function SkillHolder({ title, link, gitHub, image, children }) {
    return (
        <ul class="collapsible">
            <li>
                <div class="collapsible-header"><img src="images/yuna.jpg" alt="" class="circle responsive-img"/>First</div>
            </li>
            <li>
                <div class="collapsible-header"><img src="images/yuna.jpg" alt="" class="circle responsive-img"/>Second</div>
            </li>
            <li>
                <div class="collapsible-header"><img src="images/yuna.jpg" alt="" class="circle responsive-img"/>Third</div>
            </li>
        </ul>
    );
}

export default SkillHolder;