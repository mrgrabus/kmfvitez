import { Navigate, Route, Routes } from "react-router-dom";

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
import CmsHome from "./pages/CmsHome";
import CmsPlayers from "./pages/CmsPlayers";
import CmsTeams from "./pages/CmsTeams";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const checkAuth = () => {
    const storedData = localStorage.getItem("userToken");
    if (storedData) setIsAuth(true);
  };
  const ProtectedRoute = (props) => {
    checkAuth();
    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }
    return props.children;
  };
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
        <Route
          path="/cms/"
          element={
            <ProtectedRoute>
              <CmsHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/blog"
          element={
            <ProtectedRoute>
              <CmsArticles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/dashboard"
          element={
            <ProtectedRoute>
              <CmsHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/matches"
          element={
            <ProtectedRoute>
              <CmsMatches />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/matches/:pageNumber"
          element={
            <ProtectedRoute>
              <CmsMatches />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/players"
          element={
            <ProtectedRoute>
              <CmsPlayers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cms/teams"
          element={
            <ProtectedRoute>
              <CmsTeams />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
