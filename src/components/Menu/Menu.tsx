import { FC } from "react";
import MenuList from "./MenuList";
import MenuNavBar from "./MenuNavBar";

const Menu: FC = () => {
  return (
    <>
      <MenuNavBar />
      <MenuList />
    </>
  );
};

export default Menu;
