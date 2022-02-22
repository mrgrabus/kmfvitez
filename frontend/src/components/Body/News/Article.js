import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import ArticleContent from "./ArticleContent";
import News from "./News";

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMF Vitez | News";
  }, []);
  return (
    <>
      <ArticleContent />
      <News />
      <Footer />
    </>
  );
};

export default Article;
