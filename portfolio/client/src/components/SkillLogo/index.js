import React from "react";

function SkillLogo({ image, name }) {
    return (
        <li>
            <div class="collapsible-header">
                <img src={image} alt="" class="circle responsive-img" />
                {name}
            </div>
        </li>
    );
}

export default SkillLogo;