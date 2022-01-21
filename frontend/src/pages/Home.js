import Header from "../components/Header/Header";
import CountdownTimer from "../components/Body/Countdown/CountdownTimer";
import News from "../components/Body/News/News";
import Sponsors from "../components/Body/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";
import History from "../components/Body/History/History";

const Home = () => {
  return (
    <>
      <Header />
      <CountdownTimer />
      <News />
      <Sponsors />
      <History />
      <Footer />
    </>
  );
};

export default Home;
