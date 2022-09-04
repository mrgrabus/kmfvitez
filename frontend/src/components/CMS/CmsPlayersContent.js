import styles from "./CmsMatchesContent.module.css";
import player from "../../assets/Img/player.svg";
import React, { useEffect, useState } from "react";
import dots from "../../assets/Img/dots.svg";
import CmsNewPlayerModal from "./CmsNewPlayerModal";
import { Dropdown, Table } from "react-bootstrap";
import axios from "axios";
import Pagination from "../UI/Pagination";

const CmsPlayersContent = () => {
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([]);
  const [matchToEdit, setMatchToEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const apiCall = async () => {
    try {
      const fetchData = await fetch("http://165.22.86.104:5000/api/players/");
      const data = await fetchData.json();
      setData(data);
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
        <Table responsive="lg" className={styles.tabela}>
          <thead>
            <tr className={styles.thead}>
              <th>Picture</th>
              <th>Name</th>
              <th>Position</th>
              <th className={styles.tddd}>
                <button
                  className={styles.btn}
                  onClick={() => {
                    setIsEdit(false);
                    setShow(true);
                  }}
                >
                  <div className="d-flex">
                    <img src={player} alt="player" className={styles.picon} />
                    <span>Create new</span>
                  </div>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currentPosts.map((item) => (
              <tr key={item?.id}>
                <td>
                  <div className="d-flex justify-content-center">
                    <div className={styles.imagePreview}>
                      <img src={`http://165.22.86.104:5000/${item?.image}`} />
                    </div>
                  </div>
                </td>
                <td>
                  {item?.firstName} {item?.lastName}
                </td>
                <td>
                  {item?.position.name.charAt(0).toUpperCase() +
                    item?.position.name.slice(1, -1)}
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

export default CmsPlayersContent;
