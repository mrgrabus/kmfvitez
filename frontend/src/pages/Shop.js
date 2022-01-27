import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Shop/Products";

const Shop = () => {
  useEffect(() => {
    document.title = "KMF Vitez | Shop";
  }, []);
  return (
    <>
      <Header type="shop" />
      <Products />
      <Footer />
    </>
  );
};

export default Shop;
