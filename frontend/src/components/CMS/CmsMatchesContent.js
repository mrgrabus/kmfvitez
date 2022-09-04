import styles from "./CmsMatchesContent.module.css";
import match from "../../assets/Img/match-w.svg";
import React, { useEffect, useState } from "react";
import dots from "../../assets/Img/dots.svg";
import CmsNewMatchModal from "./CmsNewMatchModal";
import { Dropdown, Table } from "react-bootstrap";
import MatchStatusBtn from "../UI/MatchStatusBtn";
import axios from "axios";
import moment from "moment";
import Pagination from "../UI/Pagination";
import { ToastContainer, toast } from "react-toastify";

const CmsMatchesContent = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [matchToEdit, setMatchToEdit] = useState(null);
  const [isEdit, setIsEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const apiCall = async () => {
    try {
      const fetchData = await fetch("http://165.22.86.104:5000/api/matches/");
      const data = await fetchData.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://165.22.86.104:5000/api/matches/${matchToEdit}`, {
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CmsNewMatchModal
        edit={isEdit}
        matchId={matchToEdit}
        open={show}
        onClose={() => {
          setShow(false);
        }}
        isSuccessful={() => {
          notify();
        }}
      />
      <div className={styles.content}>
        <Table responsive="lg" className={styles.tabela}>
          <thead>
            <tr className={styles.thead}>
              <th>Home Team</th>
              <th>Away Team</th>
              <th>Date Time</th>
              <th>Location</th>
              <th>Status</th>
              <th className={styles.tddd}>
                <button
                  className={styles.btn}
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  <div className="d-flex">
                    <img src={match} alt="match" />
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
                  {item?.isHome === true ? "KMF Vitez" : item?.team.teamName}
                </td>
                <td>
                  {item?.isHome === false ? "KMF Vitez" : item?.team.teamName}
                </td>
                <td>{moment(item?.date).format("lll")}</td>
                <td className={styles.location}>{item?.location}</td>
                <td>
                  <MatchStatusBtn type={item?.status} />
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
                        onClick={async () => {
                          await setIsEdit(true);
                          await setMatchToEdit(item?.id);
                          await setShow(!show);
                        }}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/delete"
                        onClick={async () => {
                          await setMatchToEdit(item?.id);
                          await deleteData();
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

export default CmsMatchesContent;
