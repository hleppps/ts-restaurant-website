import { FC } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Home: FC = () => {
  return (
    <>
      <Header searchBox={true}>Jaegar Resto</Header>
      <Menu />
    </>
  );
};

export default Home;
