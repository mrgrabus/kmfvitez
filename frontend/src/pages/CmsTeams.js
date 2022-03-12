import { Container, Row, Col } from "react-bootstrap";
import CmsHeader from "../components/CMS/CmsHeader";
import Sidebar from "../components/CMS/CmsSidebar";
import CmsTeamsContent from "../components/CMS/CmsTeamsContent";

const CmsTeams = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row className="ms-0 me-0">
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsTeamsContent/>
        </Col>
      </Row>
    </Container>
  );
};

export default CmsTeams;
