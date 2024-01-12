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
  Button,
  Tooltip
} from 'reactstrap';
import './styles.css';

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar {...args} expand="md" className="navbar">
            <NavbarBrand href="/">
                <img src="/img/LittleLinguistLogo.png" alt="logo" style={{height: 125}}/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mx-auto" navbar>
            <NavItem className="px-3">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="https://www.teacherspayteachers.com/Store/Littlelinguistsresources">
                TPT Store
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="px-3">
              <DropdownToggle nav caret>
                Learning Materials
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/MatchingGame">Matching Game</DropdownItem>
                <DropdownItem>Coming Soon!</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button href="/Contact" className="contact-btn"> Contact Us</Button>
        </Collapse>
        </Navbar>
        <hr/>
    </div>
  )
}

export default Header;