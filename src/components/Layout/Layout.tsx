import { FC, useState } from "react";
import NavBar from "../NavBar";
import Orders from "../Orders";
import Payment from "../Payment";
import PopUp from "../PopUp";
import SideBar from "../SideBar";
import styles from "./Layout.module.scss";

const Layout: FC = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showPopUp, setShowPopUp] = useState(true);

  const showSidebarHandler = () => {
    setShowSideBar(true);
  };

  const hideSidebarHandler = () => {
    setShowSideBar(false);
  };

  const showPopUpHandler = () => {
    setShowPopUp(true);
    setShowSideBar(true);
  };

  const hidePopUpHandler = () => {
    setShowPopUp(false);
  };

  const contentStyles = showSideBar
    ? `${styles.content} ${styles.showSideBar}`
    : styles.content;

  return (
    <div className={styles.layout}>
      <NavBar />
      <div className={contentStyles}>
        <button onClick={showSidebarHandler}>Show Sidebar</button>
        <button onClick={hideSidebarHandler}>Hide Sidebar</button>
        <button onClick={showPopUpHandler}>Show Popup</button>

        <div>{props.children}</div>
      </div>

      {showSideBar && (
        <SideBar>
          <Payment />
        </SideBar>
      )}

      {showPopUp && (
        <PopUp onHide={hidePopUpHandler}>
          <Orders />
        </PopUp>
      )}
    </div>
  );
};

export default Layout;
