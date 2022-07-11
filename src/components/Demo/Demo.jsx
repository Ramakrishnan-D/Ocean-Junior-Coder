import React, { useEffect, useRef, useState } from "react";
import "./demo.css";
import "./Demojs";
export default function Demo() {
  function functionMoveleft() {}
  function functionMoveRight() {}
  const childRef = useRef();
  const [childWidth, setChildWidth] = useState("");
  const [childLeft, setChildLeft] = useState("");
  var list = [];
  for (var i = 0; i <= 5; i++) {
    list[i] = i;
  }
  useEffect(() => {
    var value = childRef.current.clientWidth;
    setChildWidth(value);
    for (var i = 0; i <= 5; i++) {
      document.getElementById(i).addEventListener("mouseenter", (e) => {
        e.target.style.cursor = "grab";
      });
    }
    for (var i = 0; i <= 5; i++) {
      document.getElementById(i).addEventListener("mouseleave", (e) => {
        e.target.style.background = "green";
      });
    }
  });

  return (
    <section>
      <div className="MainParent">
        <div className="MainInner">
          {list.map((eachList) => {
            return (
              <div id={eachList} className="Child" ref={childRef}>
                {eachList}
              </div>
            );
          })}
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
