import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CountdownTimer from "../components/Body/Countdown/CountdownTimer"
import Sponsors from "../components/Body/Sponsors/Sponsors"
import { useEffect } from 'react'
import NewsPageContent from "../components/Body/NewsPage/NewsPageContent";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMF Vitez | News";
  }, []);
  return (
    <>
      <Header type="news" />
      <NewsPageContent />
      <CountdownTimer />
      <Sponsors />
      <Footer />
    </>
  );
};

export default News;
