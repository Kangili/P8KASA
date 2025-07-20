import"./DescriptionPanel.css";
import React, { useState } from "react";

export function DescriptionPanel(props) {
const[isContentVisible, setIsContentVisible] = useState(true);

const showContent =() => {
  setIsContentVisible (!isContentVisible);
}
const contentClass = `description_content ${isContentVisible ? "visible" : "hidden"}`;
const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div className="description_panel">
      <p className="description_header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className = {contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;