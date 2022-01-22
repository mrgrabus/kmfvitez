import { Route, Routes } from "react-router-dom";
import PlayerItem from "./components/Body/Players/PlayerItem";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import Players from "./pages/Players";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/players/:playerId" element={<PlayerItem />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
