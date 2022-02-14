import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import ArticleContent from "./ArticleContent";
import News from "./News";

const Article = () => {
  let title = "Neki title";
  title = title.toUpperCase();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
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
