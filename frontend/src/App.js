import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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
import CmsPositions from "./pages/CmsPositions";

import jwt_decode from "jwt-decode";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const checkAuth = () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        let decodedToken = jwt_decode(token);
        let currentDate = new Date();
        // JWT exp is in seconds
        if (decodedToken.exp * 1000 < currentDate.getTime()) {
          setIsAuth(false);
        } else {
          setIsAuth(true);
        }
      } catch (error) {
        setIsAuth(false);
      }
    } else {
      setIsAuth(false);
    }
  };
  const LoginRoute = (props) => {
    if (isAuth) {
      return <Navigate to="/cms" replace />;
    }
    return props.children;
  };
  const ProtectedRoute = (props) => {
    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }
    return props.children;
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/login/"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
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
        <Route
          path="/cms/positions"
          element={
            <ProtectedRoute>
              <CmsPositions />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
