import React from "react";

function SkillLogo({ image, name }) {
    return (
        <li class="collection-item">
            <div class="collapsible-header">
                <img src={image} alt="" class="responsive-img" />
                <div className="col">  
                <h5 className="center">{name}</h5>
                </div>
            </div>
        </li>
    );
}

export default SkillLogo;