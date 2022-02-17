import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./CmsSidebar.js";
import CmsBlogArticles from "./CmsBlogArticles.js";

const Articles = (props) => {
  return (
    <Row>
      <Col lg={2} className="ps-0 pe-0">
        <Sidebar />
      </Col>
      <Col lg={10} className="ps-0 pe-0">
        <CmsBlogArticles />
      </Col>
    </Row>
  );
};

export default Articles;
