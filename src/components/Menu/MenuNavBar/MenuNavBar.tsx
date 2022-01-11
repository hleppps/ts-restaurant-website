import { FC } from "react";
import { Nav } from "react-bootstrap";
import MenuNavItem from "../MenuNavItem";
import styles from "./MenuNavBar.module.scss";

const MenuNavBar: FC = (props) => {
  return (
    <Nav className={styles.menuNavBar}>
      <MenuNavItem>Hot dishes</MenuNavItem>
      <MenuNavItem>Cold Dishes</MenuNavItem>
      <MenuNavItem>Soup</MenuNavItem>
      <MenuNavItem>Grill</MenuNavItem>
      <MenuNavItem active={true}>Appetizer</MenuNavItem>
    </Nav>
  );
};

export default MenuNavBar;
