import { Route, Routes } from "react-router-dom";

import PlayerItem from "./components/Body/Players/PlayerItem";
import News from "./pages/News";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Login from "./components/Login/Login";
import CmsArticles from "./pages/CmsArticles";
import Article from "./components/Body/News/Article";
import CmsMatches from "./pages/CmsMatches";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/players/:playerId" element={<PlayerItem />} />
        <Route path="/news" element={<News />}></Route>
        <Route path="/news/:articleId" element={<Article />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cms/blog" element={<CmsArticles />}></Route>
        <Route path="/cms/dashboard" element={<CmsArticles />}></Route>
        <Route path="/cms/matches" element={<CmsMatches />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
