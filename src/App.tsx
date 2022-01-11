import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

function App() {
  const [selectedMeals, setSelectedMeals] = useState();
  return (
    <Layout>
      <Header searchBox={true}>Jaegar Resto</Header>
      <Menu />
    </Layout>
  );
}

export default App;
