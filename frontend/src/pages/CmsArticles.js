import { Container, Row, Col } from "react-bootstrap";
import CmsBlogArticles from "../components/CMS/CmsBlogArticles";
import CmsHeader from "../components/CMS/CmsHeader";
import Sidebar from "../components/CMS/CmsSidebar";

const CmsArticles = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row>
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsBlogArticles />
        </Col>
      </Row>
    </Container>
  );
};

export default CmsArticles;
