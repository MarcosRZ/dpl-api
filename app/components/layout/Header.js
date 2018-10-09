import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Xlink from '../../routing/Xlink';
import { APP_NAME } from '../../config/app';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { buat: 'defac' };
  }

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
        <Xlink href="/">
          <Navbar.Brand>
            {' '}
            <img
              alt=""
              src="/static/images/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top brand-image"
            />
            {APP_NAME}
          </Navbar.Brand>
        </Xlink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            {/* <Xlink href="/">
            <Nav.Link>Home</Nav.Link>
          </Xlink> */}
            <Xlink href="/hosts">
              <Nav.Link>Hosts</Nav.Link>
            </Xlink>
            <Xlink href="/projects">
              <Nav.Link>Projects</Nav.Link>
            </Xlink>
            <Xlink href="/apps">
              <Nav.Link>Apps</Nav.Link>
            </Xlink>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
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
