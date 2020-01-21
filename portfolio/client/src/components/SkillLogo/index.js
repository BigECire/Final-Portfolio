import React from "react";

function SkillLogo({ image, children }) {
    return (
        <li>
            <div class="collapsible-header">
                <img src={image} alt="" class="circle responsive-img" />
                {children}
            </div>
        </li>
    );
}

export default SkillLogo;