import React from "react";
import HomeCard from "./HomeCard";
import browseIcon from "../photos/home-page/Vector.svg";
import orgIcon from "../photos/home-page/org.svg";
import buildIcon from "../photos/home-page/build.svg";
import "./HomeSub3.css";

function HomeSub3({ headline, description }) {
  const cardBrowse = {
    img: browseIcon,
    title: "Browse Products",
    description:
      "At KeebWorld, we know searching for mechanical keyboard parts can be a frustrating task. KeebWorld optimizes your search by gathering parts from dozens of vendors and putting them all in one place, saving you time, money, and effort",
  };

  const cardOrganized = {
    img: orgIcon,
    title: "Get Organized",
    description:
      "KeebWorld makes it easy for you to stay on top of your build. While you’re browsing, add products you like to the Board Builder, which helps you compare those products without needing to leave the site to sort through a sea of tabs., we know searching for mechanical keyboard parts can be a frustrating task. KeebWorld optimizes your search by gathering parts from dozens of vendors and putting them all in one place, saving you time, money, and effort",
  };

  const cardBuild = {
    img: buildIcon,
    title: "Start Building",
    description:
      "At KeebWorld, we know searching for mechanical keyboard parts can be a frustrating task. KeebWorld optimizes your search by gathering parts from dozens of vendors and putting them all in one place, saving you time, money, and effort",
  };
  return (
    <div>
      <div className="text-wrapper">
        <h1>{headline}</h1>
        <p className="subtitle">{description}</p>
        <div className="card-container">
          <HomeCard {...cardBrowse}></HomeCard>
          <HomeCard {...cardOrganized}></HomeCard>
          <HomeCard {...cardBuild}></HomeCard>
        </div>
      </div>
    </div>
  );
}

export default HomeSub3;
