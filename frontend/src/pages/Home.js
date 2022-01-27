import Header from "../components/Header/Header";
import CountdownTimer from "../components/Body/Countdown/CountdownTimer";
import News from "../components/Body/News/News";
import Sponsors from "../components/Body/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";
import History from "../components/Body/History/History";
import ContactForm from '../components/UI/ContactForm';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMF Vitez | Home";
  }, []);
  return (
    <>
      <Header type="home" />
      <CountdownTimer />
      <News />
      <Sponsors />
      <History />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
