import { Container, Row, Col } from "react-bootstrap";
import CmsHeader from "../components/CMS/CmsHeader";
import CmsPositionsList from "../components/CMS/CmsPositionsList";
import Sidebar from "../components/CMS/CmsSidebar";

const CmsPositions = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row className="ms-0 me-0">
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsPositionsList/>
        </Col>
      </Row>
    </Container>
  );
};

export default CmsPositions;
