import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./dropDown.css";
import dropDownListData from "./dropDownListData";

export default function DropDownDemo() {
  const [isClicked, setIsClicked] = useState(false);
  const [topValue, setTopValue] = useState(0);

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
        <div className="listSelector"></div>
        <ul>
          {dropDownListData.map((listValue, key) => {
            return <li className="listItem">{listValue.fruit}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
