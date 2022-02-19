import { Container, Row, Col } from "react-bootstrap";
import CmsHeader from "../components/CMS/CmsHeader";
import CmsMatchesContent from "../components/CMS/CmsMatchesContent";
import Sidebar from "../components/CMS/CmsSidebar";

const CmsMatches = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row>
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsMatchesContent />
        </Col>
      </Row>
    </Container>
  );
};

export default CmsMatches;
