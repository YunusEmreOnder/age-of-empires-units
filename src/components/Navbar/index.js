import React from 'react'; 
import './index.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
const TopMenu = (props) => {
    return (
      <div>
        <Navbar color="light" light expand="md" className=''>
          <NavbarBrand className="pageTitle" href="/">Home Page</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/units" activeClassName="active">Units</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
  
  export default TopMenu;