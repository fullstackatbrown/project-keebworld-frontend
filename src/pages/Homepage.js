import React from "react";
import HeroSection from "../components/HeroSection";
import { homeObjOne } from "./data";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      {/* <div className= "multicolor"></div> */}
    </>
    // <div className="notes">
    //     <p>Notes 2/26:</p>
    //     <p>Updated products page (is temporarily Stabilizers page)</p>
    //     <p>Home component in code is global (don't put anything in it except Navigation Bar)</p>
    //     <p>Homepage is in Homepage.js</p>
    // </div>
  );
}
