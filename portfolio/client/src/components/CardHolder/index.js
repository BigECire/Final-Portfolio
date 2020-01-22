import React from "react";

function CardHolder({ title, children }) {
  return (
    <div>
      <h4 className = "center">{ title }</h4>
      <div>
      { children }
      </div>
    </div>
  );
}

export default CardHolder;