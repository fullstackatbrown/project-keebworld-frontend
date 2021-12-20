import React, { useState } from 'react';
import "./nav.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import logo from "../photos/cropped-keeb-world-logo-PNG-color-1.png"

import Home from '../pages/Home.js';
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import VendorLinks from "../pages/VendorLinks";
import MechMarketBot from "../pages/MechMarketBot";
import Products from "../pages/Products";

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <div>
        <Navbar color="FFFFFF" light expand="md">
          <a href="/"><img className="photo" alt="logo" src={logo} /></a>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-auto" navbar>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/contactus/">
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/faq/">
                FAQ
              </NavLink>
            </NavItem >
            <NavItem className="navItem">
              <NavLink className="navLink" href="/vendorlinks/">
                Vendor Links
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/mechmarket">
                MechMarket Bot
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink" href="/products/">
                Browse Now
              </NavLink>
            </NavItem>              
          </Nav>

          </Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contactus/" element={<ContactUs />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/vendorlinks/" element={<VendorLinks />} />
          <Route path="/mechmarket/" element={<MechMarketBot />} />
          <Route path="/products/" element={<Products />} />          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Bar;