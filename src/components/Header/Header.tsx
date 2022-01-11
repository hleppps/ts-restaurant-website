import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import CurrentDate from "../CurrentDate";
import Input from "../UI/Input";
import styles from "./Header.module.scss";

interface HeaderProps {
  searchBox: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header>
      <div className={styles.innerContent}>
        <div>
          <h2>{props.children}</h2>
          <CurrentDate />
        </div>
        {props.searchBox && (
          <div className={styles.searchBox}>
            <Input placeholder="Search for meals..." icon={faSearch} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
