import { FC } from "react";
import { Nav } from "react-bootstrap";
import styles from "./NavBar.module.scss";
import NavItem from "../NavItem";
import {
  faCog,
  faEnvelope,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const NavBar: FC = () => {
  return (
    <Nav className={styles.navBar}>
      <NavItem active={true} icon={faHome} />
      <NavItem icon={faEnvelope} />
      <NavItem icon={faCog} />
      <NavItem icon={faSignOutAlt} />
    </Nav>
  );
};

export default NavBar;
