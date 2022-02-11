import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { PAGE_URLS } from "./constants";
import DUMMY_PAGES from "./data/dummyPages";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import { useAppSelector } from "./store/store";

function App() {
  const pages = useState(DUMMY_PAGES)[0];

  const lol = useAppSelector((state) => state.meals);

  const lolHandler = () => {
    console.log(lol);
  };

  return (
    <Layout pages={pages}>
      <button onClick={lolHandler}>q</button>
      <Routes>
        <Route path={PAGE_URLS.home} element={<Home />} />
        <Route path={PAGE_URLS.messages} element={<Messages />} />
        <Route path={PAGE_URLS.settings} element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
