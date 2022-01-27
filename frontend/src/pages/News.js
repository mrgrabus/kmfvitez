import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CountdownTimer from "../components/Body/Countdown/CountdownTimer"
import Sponsors from "../components/Body/Sponsors/Sponsors"
import { useEffect } from 'react'

const News = () => {
  useEffect(() => {
    document.title = "KMF Vitez | News";
  }, []);
  return (
    <>
      <Header type="news" />
      <CountdownTimer />
      <Sponsors />
      <Footer />
    </>
  );
};

export default News;
