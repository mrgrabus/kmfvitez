import PlayersContent from "../components/Body/Players/PlayersContent";
import Header from "../components/Header/Header";
import Footer from '../components/Footer/Footer';
import { useEffect } from "react";

const Players = () => {
  useEffect(() => {
    document.title = "KMF Vitez | Players";
  }, []);
  return (
    <>
      <Header type="players" />
      <PlayersContent />
      <Footer />
    </>
  );
};

export default Players;
