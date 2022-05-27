import React, { useEffect, useState } from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styles from "./CmsArticlesList.module.css";
import StatusButton from "../UI/StatusButton";
import CmsNewArticleModal from "./CmsNewArticleModal";
import axios from "axios";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";

const CmsArticlesList = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState(null);
  const apiCall = async () => {
    try {
      const response = await fetch("http://167.235.50.89:5000/api/news");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://167.235.50.89:5000/api/news/${articleToEdit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      apiCall();
    } catch (err) {
      console.log(err);
    }
  };
  const notify = () => {
    toast.success("Item submitted successfully !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    apiCall();
  }, [show]);
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
          isSuccessful={() => {
            notify();
          }}
        />
      )}
      {data.map((article) => (
        <Row className={styles.listDiv}>
          <Col xs={7} md={5} className={styles.heading}>
            <div className="d-flex flex-column my-auto">
              <p className={styles.title}>{article.title}</p>
              <p className={styles.timestamp}>
                {moment(article?.createdAt).format("MMMM Do YYYY")}
              </p>
            </div>
          </Col>
          <Col xs={3} md={4} className={styles.heading}>
            {article?.status && <StatusButton type={article.status} />}
          </Col>
          <Col xs={2} md={3} className={styles.heading}>
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
                    setArticleToEdit(article?.id);
                    setShow(!show);
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Row>
      ))}
    </div>
  );
};

export default CmsArticlesList;
