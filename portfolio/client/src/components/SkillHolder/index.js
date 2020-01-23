import React from "react";

function SkillHolder({ children }) {
    return (
        <ul class="collection">
            {children}
        </ul>
    );
}

export default SkillHolder;