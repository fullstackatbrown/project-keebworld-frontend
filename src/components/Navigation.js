import React, { useState } from 'react';
import "./nav.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown
} from 'reactstrap';
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import Homepage from "../pages/Homepage";
import Stabilizers from "../pages/Stabilizers";
import {
  Routes,
  Route
} from 'react-router-dom';

import logo from "../photos/keebworld.png"
import search from "../photos/search.png"

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar color="FFFFFF" light expand="md" className="nav">
          <a href="/home"><img className="photo" alt="logo" src={logo} /></a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          
          <Nav className="container">
            <NavItem className="navItem">
              <NavLink className="navLink" href="/builder/">
                Board Builder
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/guides/">
                Board Guides
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/stabilizers/">
                Products
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/contactus/">
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/products/">
                <img className="photo" alt="search" src={search} width="30"/>
              </NavLink>
            </NavItem>     
                     
          </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contactus/" element={<ContactUs />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/stabilizers/" element={<Stabilizers />} />          
        </Routes>
      </div>
  );
}
