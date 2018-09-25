import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Xlink from '../../routing/Xlink';
import { APP_NAME } from '../../config/app';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { buat: 'defac' };
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect className="no-rounded-corners">
        <Navbar.Header>
          <Navbar.Brand>
            <Xlink href="/">
              <a>{APP_NAME}</a>
            </Xlink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Xlink href="/hosts" prefetch>
              <NavItem eventKey={1}>Hosts</NavItem>
            </Xlink>
            <Xlink href="/projects" prefetch>
              <NavItem eventKey={2}>Projects</NavItem>
            </Xlink>
            <Xlink href="/apps" prefetch>
              <NavItem eventKey={3}>Apps</NavItem>
            </Xlink>
            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
              <Xlink href="/projects">
                <MenuItem eventKey={4.1}>Projects (again)</MenuItem>
              </Xlink>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
