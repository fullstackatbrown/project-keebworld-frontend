import React, { useState } from 'react';
import "./nav.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import Homepage from "../pages/Homepage";
import Stabilizers from "../pages/Stabilizers";
import SingleProduct from "../pages/SingleProduct";
import Cookies from 'universal-cookie';
import {
  Routes,
  Route
} from 'react-router-dom';

import logo from "../photos/keebworld.png"
import search from "../photos/search.png"


export const Navigation = (props) => {
  const cookies = new Cookies();
  const [isOpen, setIsOpen] = useState(false);  
  const toggle = () => setIsOpen(!isOpen);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;

  return (
      <div>
        <Navbar color="FFFFFF" light expand="md" className="nav">
          <a href="/"><img className="photo" alt="logo" src={logo} /></a>
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
              <div className="dropdown" onClick={toggle}>
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  Products
                </button>
                <div className={menuClass} aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/switches">
                    Switches
                  </a>
                  <a className="dropdown-item" href="/keycaps">
                    Keycaps
                  </a>
                  <a className="dropdown-item" href="/stabilizers">
                    Stabilizers
                  </a>
                  <a className="dropdown-item" href="/lube">
                    Lube
                  </a>
                </div>
              </div>
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
          <Route exact path="/product/:prodId" element={
            <SingleProduct productId={cookies.get("prodId")}></SingleProduct>
          }>
          </Route>    
        </Routes>
      </div>
  );
}
