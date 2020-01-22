import React from "react";

function SkillHolder({ children }) {
    return (
        <ul class="collapsible">
            {children}
        </ul>
    );
}

export default SkillHolder;