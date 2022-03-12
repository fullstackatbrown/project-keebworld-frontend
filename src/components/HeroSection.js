import React from "react";
import "./HeroSection.css";
import Button from "@mui/material/Button";
// import top from "./top.png";
import top from "../photos/home-page/top.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown,
} from "reactstrap";

function HeroSection({
  backgrd_color,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <div className="home_hero-section">
      <div className="home_hero-text-wrapper">
        <h1 className={lightText ? "heading" : "heading dark"}>{headline}</h1>
        <p
          className={
            lightTextDesc ? "home_hero-subtitle" : "home_hero-subtitle dark"
          }
        >
          {description}
        </p>
        <NavLink className="navLink" href="/builder/">
          <Button variant="contained">{buttonLabel}</Button>
        </NavLink>
      </div>

      <img src={img} alt={alt} className="home_hero-img" />
    </div>
  );
}

export default HeroSection;
