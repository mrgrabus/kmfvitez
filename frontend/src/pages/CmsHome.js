import { Container } from "react-bootstrap";
import Dashboard from "../components/CMS/CmsBody";
import CmsHeader from "../components/CMS/CmsHeader";

const CmsHome = () => {
  return (
    <Container fluid className="ps-0 pe-0">
      <CmsHeader />
      <Dashboard />
    </Container>
  );
};

export default CmsHome;
