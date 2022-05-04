import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./dropDown.css";
import dropDownListData from "./dropDownListData";

export default function DropDownDemo() {
  const [isClicked, setIsClicked] = useState(false);

  //   function showDrop(index) {
  //     let height = document.(".dropList");
  //     return height[index].clientHeight;
  //   style={{ height: isClicked == true ? "300" : "0" }}
  //   }

  return (
    <div className="dropDown">
      <div
        className="menu"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <div className="title">Menu</div>
        <IoIosArrowDown />
      </div>

      <div className="dropList" style={{ height: isClicked ? "200px" : 0 }}>
        <ul>
          {dropDownListData.map((listValue, key) => {
            return <li> {listValue.fruit}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
