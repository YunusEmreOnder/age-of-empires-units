import React from 'react'; 
import { connect } from 'react-redux'
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './index.scss';
const TopMenu = (props) => {
  const {title} = props
    return (
        <Navbar color="light" light expand="md" className=''>
          <NavbarBrand className="pageTitle" href="/">{title}</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/units" activeClassName="active">Units</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    );
  }
  
  
const mapStateToProps = state => ({
  title: state.pageTitle,
})
export default connect(mapStateToProps)(TopMenu);