import { FC, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { NavigationPage } from "../../interfaces";
import NavItem from "../NavItem";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  pages: NavigationPage[];
}

const NavBar: FC<NavBarProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<string | undefined>("");

  useEffect(() => {
    const pathname = document.location.pathname.split("/")[1];
    setCurrentPage("/" + pathname);
  }, []);

  return (
    <Nav className={styles.navBar}>
      {props.pages.map((page) => (
        <NavItem
          key={page.linkTo}
          linkTo={page.linkTo}
          icon={page.icon}
          active={page.linkTo === currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </Nav>
  );
};

export default NavBar;
