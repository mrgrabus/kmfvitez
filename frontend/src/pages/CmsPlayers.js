import { Container, Row, Col } from "react-bootstrap";
import CmsHeader from "../components/CMS/CmsHeader";
import CmsPlayersContent from "../components/CMS/CmsPlayersContent";
import Sidebar from "../components/CMS/CmsSidebar";

const CmsPlayers = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Row className="ms-0 me-0">
        <Col lg={2} className="ps-0 pe-0">
          <Sidebar />
        </Col>
        <Col lg={10} className="ps-0 pe-0">
          <CmsPlayersContent/>
        </Col>
      </Row>
    </Container>
  );
};

export default CmsPlayers;
