import { Container } from "react-bootstrap";
import Articles from "../components/CMS/CmsBody";
import CmsHeader from "../components/CMS/CmsHeader";

const CmsArticles = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Articles />
    </Container>
  );
};

export default CmsArticles;
