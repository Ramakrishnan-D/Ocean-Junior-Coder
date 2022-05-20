import React from "react";
import "./demo.css";
import "./Demojs";
export default function Demo() {
  function functionMoveleft() {}
  function functionMoveRight() {}
  return (
    <section>
      <div className="MainParent">
        <div className="MainInner">
          <div id="Child" className="Child">
            1
          </div>
          <div id="Child" className="Child">
            2
          </div>
          <div id="Child" className="Child">
            3
          </div>
          <div id="Child" className="Child">
            4
          </div>
          <div id="Child" className="Child">
            5
          </div>
          <div id="Child" className="Child">
            6
          </div>
          <div id="Child" className="Child">
            7
          </div>
          <div id="Child" className="Child">
            8
          </div>
        </div>
        <div className="button">
          <div className="Left" onClick={functionMoveleft}>
            L
          </div>
          <div className="right" onClick={functionMoveRight}>
            R
          </div>
        </div>
      </div>
    </section>
  );
}
