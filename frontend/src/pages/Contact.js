import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContactForm from "../components/UI/ContactForm";
import CountdownTimer from "../components/Body/Countdown/CountdownTimer"
import Sponsors from "../components/Body/Sponsors/Sponsors"
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    document.title = "KMF Vitez | Contact";
  }, []);
  return (
    <>
      <Header type="contact" />
      <ContactForm />
      <CountdownTimer />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Contact;
