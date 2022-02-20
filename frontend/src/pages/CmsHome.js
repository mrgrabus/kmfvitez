import { Col, Container, Row } from "react-bootstrap";
import CmsDashboard from "../components/CMS/CmsDashboard";
import CmsHeader from "../components/CMS/CmsHeader";
import Sidebar from "../components/CMS/CmsSidebar";

const CmsHome = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row>
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsDashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default CmsHome;
