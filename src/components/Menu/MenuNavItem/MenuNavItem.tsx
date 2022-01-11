import { FC } from "react";
import { NavItem } from "react-bootstrap";
import styles from "./MenuNavItem.module.scss";

interface MenuNavItemProps {
  active?: boolean | undefined;
}

const MenuNavItem: FC<MenuNavItemProps> = (props) => {
  const activeStyles = props.active ? styles.active : "";

  return (
    <NavItem className={`${styles.menuNavItem} ${activeStyles}`}>
      {props.children}
    </NavItem>
  );
};

export default MenuNavItem;
