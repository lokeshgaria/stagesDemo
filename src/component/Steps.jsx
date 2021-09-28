import React from "react";
import stage1 from "../assets/stage1.jpeg";
import stage2 from "../assets/stage2.jpeg";
import stage3 from "../assets/stage3.jpeg";
import stage4 from "../assets/stage4.jpeg";

import "./steps.css";

function steps() {
  return (
    <div className="rowDiv">
      <div className="stage">
        <img src={stage1} alt="stage1" />
        <div className="stageText">
          <h4>Inquiry</h4>
          <p> "this is the sample text , insert your text here"</p>
        </div>
      </div>
      <div className="stage">
        <img src={stage2} alt="stage2"></img>
        <div className="stageText stagetwo">
          <h4>comparison</h4>
          <p> "this is the sample text , insert your text here"</p>
        </div>
      </div>
      <div className="stage ">
        <img src={stage3} alt="stage2"></img>
        <div className="stageText">
          <h4>installation</h4>
          <p> "this is the sample text , insert your text here"</p>
        </div>
      </div>
      <div className="stage stage3">
        <img src={stage4} alt="stage2"></img>
        <div className="stageText">
          <h4>purchase</h4>
          <p> "this is the sample text , insert your text here"</p>
        </div>
      </div>
    </div>
  );
}

export default steps;
