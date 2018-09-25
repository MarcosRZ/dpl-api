import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Xlink from '../../routing/Xlink';
import { APP_NAME, APP_NAME2 } from '../../config/app';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { buat: 'defac' };
  }

  render() {
    return (
      <Navbar className="no-rounded-corners">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  handleMenuClick: PropTypes.func,
};

Header.defaultProps = {
  className: '',
  handleMenuClick: () => {},
};

export default Header;
