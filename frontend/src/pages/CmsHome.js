import { Container } from "react-bootstrap";
import Dashboard from "../components/CMS/CmsBody";
import CmsHeader from "../components/CMS/CmsHeader";

const CmsHome = () => {
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

export default CmsHome;
