import React from "react";

function HighlightsItems(props) {
  return (
    <>
      <div>
        <li>✔️{props.listItem}</li>
      </div>
    </>
  );
}

export default HighlightsItems;
