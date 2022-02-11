import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  linkTo: string;
  icon: IconDefinition;
  active?: boolean;
  setCurrentPage: (newCurrentPage: string) => void
}

const NavItem: FC<NavItemProps> = (props) => {
  const activeStyles = props.active ? styles.active : "";

  const setCurrentPageHandler = () => {
    props.setCurrentPage(props.linkTo)
  };

  return (
    <div className={`${styles.navItem} ${activeStyles}`}>
      <div className={styles.outer}>
        <div className={styles.outerTop}></div>
      </div>
      <div className={styles.inner}>
        <Link to={props.linkTo}>
          <Button
            active={props.active}
            icon={props.icon}
            disabled={props.active}
            onClick={setCurrentPageHandler}
          >
            {props.children}
          </Button>
        </Link>
      </div>
      <div className={styles.outer}>
        <div className={styles.outerBottom}></div>
      </div>
    </div>
  );
};

export default NavItem;
