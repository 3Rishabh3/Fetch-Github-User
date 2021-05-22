import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <Navbar color="info" className="text-white">
      <NavbarBrand>
        <NavLink tag={Link} to="/">
          Rishabh's Gitfire
        </NavLink>
      </NavbarBrand>
      <NavbarText>{context.user ? context.user?.email : ""}</NavbarText>
      <Nav>
        {context.user ? (
          <NavItem>
            <NavLink
              tag={Link}
              onClick={() => {
                context.setUser(null);
              }}
              className="text-white"
            >
              Logout
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/signin" className="text-white">
                SignIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signup" className="text-white">
                SignUp
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
