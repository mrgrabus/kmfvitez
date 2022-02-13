import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import ArticleContent from "./ArticleContent";

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
      <Footer />
    </>
  );
};

export default Article;
