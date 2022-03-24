import React from "react";
import switches from "../photos/home-page/switches.png";
import "./HomeSub2.css";

function HomeSub2() {
  return (
    <div className="multicolor">
      <div>
        <div class="grid-container-2">
          <div class="item1">
            <img src={switches} alt="switches"></img>
          </div>
          <div class="item2">
            <img src={switches} alt="icon"></img>
          </div>
        </div>
        <div class="grid-container-3">
          <div class="item1">
            1{/* <img src={switches} alt="icon"></img> */}
          </div>
          <div class="item2">
            2{/* <img src={switches} alt="icon"></img> */}
          </div>
          <div class="item3">
            3{/* <img src={switches} alt="icon"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSub2;
