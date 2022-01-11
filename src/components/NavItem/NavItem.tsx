import { FC } from "react";
import { Nav } from "react-bootstrap";
import styles from "./NavItem.module.scss";
import Button from "../UI/Button";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

interface NavItemProps {
  active?: boolean;
  icon?: IconDefinition
}

const NavItem: FC<NavItemProps> = (props) => {
  const isActive = props.active ? true : undefined;
  const activeStyles = isActive ? styles.active : "";

  return (
    <Nav.Link className={`${styles.navItem} ${activeStyles}`}>
      <div className={styles.outer}>
        <div className={styles.outerTop}></div>
      </div>
      <div className={styles.inner}>
        <Button active={isActive} icon={props.icon}>{props.children}</Button>
      </div>
      <div className={styles.outer}>
        <div className={styles.outerBottom}></div>
      </div>
    </Nav.Link>
  );
};

export default NavItem;
