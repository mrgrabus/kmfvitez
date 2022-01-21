import { Route, Routes } from "react-router-dom";
import PlayerItem from "./components/Body/Players/PlayerItem";

import Home from "./pages/Home";
import Players from "./pages/Players";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/players/:playerId" element={<PlayerItem />} />
      </Routes>
    </>
  );
}

export default App;
