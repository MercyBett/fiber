import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
        	<div>

	            <Router>
	                <Navbar className="nav1" light color="blue-grey lighten-5" light expand="lg" scrolling>
	                    <NavbarBrand href="/">
	                        <strong>Navbar</strong>
	                    </NavbarBrand>
	                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
	                    <Collapse isOpen = { this.state.collapse } navbar>
	                        <NavbarNav left>
	                          <NavItem className="inline">
	                              <NavLink to="#"><i className = "fa fa-map-marker"> Air fibre location</i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-phone"> +254700000000</i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-envelope"> info@airfiber.com</i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-globe"> www.airfiber.com</i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-facebook"> </i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-linkedin"> </i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-twitter"> </i></NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#"><i className = "fa fa-google-plus"></i></NavLink>
	                          </NavItem>
	                          
	                        </NavbarNav>
	                        
	                    </Collapse>
	                </Navbar>
	            </Router>
	            <Router>
	                <Navbar style={{paddingBottom:"30px", paddingTop:"30px"}} light color="white" light expand="lg" scrolling>
	                    <NavbarBrand href="/">
	                        <strong>Navbar</strong>
	                    </NavbarBrand>
	                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
	                    <Collapse isOpen = { this.state.collapse } navbar>
	                        <NavbarNav right>
	                          <NavItem active>
	                              <NavLink to="#">Home</NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#">Internet</NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#">Product & Services</NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <NavLink to="#">Customer Services</NavLink>
	                          </NavItem>
	                          <NavItem>
	                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
	                              <DropdownToggle nav caret>Dropdown</DropdownToggle>
	                              <DropdownMenu>
	                                  <DropdownItem href="#">Action</DropdownItem>
	                                  <DropdownItem href="#">Another Action</DropdownItem>
	                                  <DropdownItem href="#">Something else here</DropdownItem>
	                                  <DropdownItem href="#">Something else here</DropdownItem>
	                              </DropdownMenu>
	                              </Dropdown>
	                          </NavItem>
	                          <NavItem>
	                            <form className="form-inline md-form mt-0">
	                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
	                            </form>
	                          </NavItem>
	                        </NavbarNav>
	                        
	                    </Collapse>
	                </Navbar>
	            </Router>
	        </div>
        

        );
    }
}
export default NavbarFeatures;