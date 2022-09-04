import styles from "./CmsMatchesContent.module.css";
import React, { useEffect, useState } from "react";
import dots from "../../assets/Img/dots.svg";
import CmsNewPlayerModal from "./CmsNewPlayerModal";
import { Accordion, Dropdown, Table } from "react-bootstrap";
import axios from "axios";
import Pagination from "../UI/Pagination";

const CmsPositionsList = () => {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);
  const [submitData, setSubmitData] = useState([]);
  const [matchToEdit, setMatchToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const apiCall = async () => {
    try {
      const fetchData = await fetch(
        "http://165.22.86.104:5000/api/player/position/"
      );
      const data = await fetchData.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("userToken");
    try {
      await axios.post(
        `http://165.22.86.104:5000/api/player/position`,
        submitData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://165.22.86.104:5000/api/player/${matchToEdit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      apiCall();
    } catch (err) {
      console.log(err);
    }
  };
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
  useEffect(() => {
    apiCall();
  }, [matchToEdit, show]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CmsNewPlayerModal
        open={show}
        edit={isEdit}
        newsId={matchToEdit}
        onClose={() => {
          setShow(false);
        }}
      />
      <div className={styles.content}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Add New Position</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={submitHandler}>
                <div className="d-flex justify-content-between align-center">
                  <input
                    type="text"
                    placeholder="Position name"
                    className="w-100 me-3"
                    value={submitData}
                    onChange={(e) => {
                      setSubmitData(e.target.value);
                    }}
                  />
                  <button className={styles.btn}>Add</button>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Table responsive="lg" className={styles.tabela}>
          <thead>
            <tr className={styles.thead}>
              <th>Id</th>
              <th>Position Name</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currentPosts.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>
                  {item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
                </td>
                <td className={styles.tddd}>
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      className={styles.dropdown}
                    >
                      <img src={dots} alt="dots" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <p className={styles.ddtitle}>Manage</p>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#/edit"
                        onClick={() => {
                          setIsEdit(true);
                          setMatchToEdit(item?.id);
                          setShow(!show);
                        }}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/delete"
                        onClick={() => {
                          setMatchToEdit(item?.id);
                          deleteData();
                        }}
                      >
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center w-100">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default CmsPositionsList;
