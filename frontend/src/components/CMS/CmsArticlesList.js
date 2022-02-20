import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./CmsArticlesList.module.css";
import StatusButton from "../UI/StatusButton";
import CmsNewArticleModal from "./CmsNewArticleModal";
import axios from "axios";
import moment from "moment";

const CmsArticlesList = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState(null);
  const apiCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/news");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://localhost:5000/api/news/${articleToEdit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      apiCall();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  return (
    <div>
      {show && (
        <CmsNewArticleModal
          edit
          newsId={articleToEdit}
          open={true}
          onClose={() => {
            apiCall();
            setShow(false);
          }}
        />
      )}
      {data.map((article) => (
        <Row className={styles.listDiv}>
          <Col lg={5} className={styles.heading}>
            <div className="d-flex flex-column">
              <p className={styles.title}>{article.title}</p>
              <p className={styles.timestamp}>
                {moment(article?.createdAt).format("MMMM Do YYYY")}
              </p>
            </div>
          </Col>
          <Col lg={4} className={styles.heading}>
            {article?.status && <StatusButton type={article.status} />}
          </Col>
          <Col lg={3} className={styles.heading}>
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} className={styles.dropdown}>
                <FontAwesomeIcon icon={faEllipsisH} className={styles.dots} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <p className={styles.ddtitle}>Manage</p>
                <Dropdown.Divider />
                <Dropdown.Item
                  href="#/edit"
                  onClick={() => {
                    setShow(!show);
                    setArticleToEdit(article?.id);
                  }}
                >
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/delete"
                  onClick={() => {
                    setArticleToEdit(article?.id);
                    deleteData();
                  }}
                >
                  Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default CmsArticlesList;
