import { useState } from 'react';
import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import './styles.css';

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar {...args} expand="sm">
            <NavbarBrand href="/">
                <img src="/img/LittleLinguistLogo.png" alt="logo" style={{height: 125}}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Learning Materials
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/MatchingGame">Matching Game</DropdownItem>
                <DropdownItem>Coming Soon!</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button href="/Contact">Get in touch</Button>
        </Collapse>
        </Navbar>
        <hr/>
    </div>
  )
}

export default Header;