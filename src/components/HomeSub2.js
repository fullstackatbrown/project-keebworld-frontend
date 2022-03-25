import React from "react";
import switches from "../photos/home-page/switches.png";
import keycaps from "../photos/home-page/Keycaps.png";
import stabilizers from "../photos/home-page/stabilizers.png";
import AliExpress from "../photos/home-page/Logos/AliExpress.svg";
import Amazon from "../photos/home-page/Logos/Amazon.svg";
import kbdfans from "../photos/home-page/Logos/kbdfans.svg";
import NovelKeys from "../photos/home-page/Logos/NovelKeys.svg";
import bang from "../photos/home-page/Logos/bang.svg";

import "./HomeSub2.css";

function HomeSub2() {
  return (
    <div className="multicolor">
      <p>Browse popular vendors like</p>
      <div>
        <div class="grid-container-5">
          <div class="logo">
            <img src={Amazon} alt="switches"></img>
          </div>
          <div class="logo">
            <img src={kbdfans} alt="icon"></img>
          </div>
          <div class="logo">
            <img src={NovelKeys} alt="switches"></img>
          </div>
          <div class="logo">
            <img src={AliExpress} alt="icon"></img>
          </div>
          <div class="logo">
            <img src={bang} alt="switches"></img>
          </div>
        </div>
        <div class="grid-container-2">
          <div class="item1">
            <img src={switches} alt="switches"></img>
          </div>
          <div class="item2">
            <img src={keycaps} alt="icon"></img>
          </div>
        </div>
        <div class="grid-container-3">
          <div class="item1">
            <img src={stabilizers} alt="icon"></img>
          </div>
          <div class="item2">
            <img src={stabilizers} alt="icon"></img>
          </div>
          <div class="item3">
            <img src={stabilizers} alt="icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSub2;
