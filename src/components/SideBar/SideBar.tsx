import { FC } from "react";
import styles from "./SideBar.module.scss";

const SideBar: FC = (props) => {
  return <div className={styles.sideBar}>{props.children}</div>;
};

export default SideBar;
