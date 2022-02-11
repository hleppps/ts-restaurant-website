import { FC, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Orders from "../Orders";
import Payment from "../Payment";
import PopUp from "../PopUp";
import SideBar from "../SideBar";
import styles from "./Layout.module.scss";
import { NavigationPage } from "../../interfaces";
import { useAppSelector } from "../../store/store";

interface LayoutProps {
  pages: NavigationPage[];
}

const Layout: FC<LayoutProps> = (props) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [sideBarContent, setSideBarContent] = useState<any | undefined>(undefined)

  const selectedMeals = useAppSelector((state) => state.meals.selectedMeals);

  useEffect(()=>{
    if (selectedMeals.length === 0) {
      hideSideBarHandler()
    } else {
      setSideBarContent(<Orders />)
      showSideBarHandler()
    }
  }, [selectedMeals])

  const showSideBarHandler = () => {
    setShowSideBar(true);
  };

  const hideSideBarHandler = () => {
    setShowSideBar(false);
    setShowPopUp(false);
  };

  const showPopupHandler = () => {
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
      <NavBar pages={props.pages} />

      <div className={contentStyles}>{props.children}</div>

      {showSideBar && (
        <SideBar>
          {/* <Payment /> */}
          {sideBarContent}
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
