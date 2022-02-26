import styles from "./CmsMatchesContent.module.css";
import match from "../../assets/Img/match-w.svg";
import React, { useEffect, useState } from "react";
import dots from "../../assets/Img/dots.svg";
import CmsNewArticleModal from "./CmsNewArticleModal";
import { Dropdown, Table } from "react-bootstrap";
import MatchStatusBtn from "../UI/MatchStatusBtn";
import axios from "axios";
import moment from 'moment'

const CmsMatchesContent = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [matchToEdit, setMatchToEdit] = useState(null);

  const apiCall = async () => {
    try {
      const fetchData = await fetch("http://localhost:5000/api/matches/");
      const data = await fetchData.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://localhost:5000/api/matches/${matchToEdit}`, {
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
  }, [deleteData]);
  return (
    <>
      <CmsNewArticleModal
        open={show}
        onClose={() => {
          setShow(false);
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
                  <img src={match} alt="match" />
                  <span>Create new</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data.map((item) => (
              <tr key={item?.id}>
                <td>
                  {item?.isHome === true ? "KMF Vitez" : item?.team.teamName}
                </td>
                <td>
                  {item?.isHome === false ? "KMF Vitez" : item?.team.teamName}
                </td>
                <td>{moment(item?.date).format('lll')}</td>
                <td>{item?.location}</td>
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
                        onClick={() => {
                          setShow(!show);
                          setMatchToEdit(item?.id);
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
      </div>
    </>
  );
};

export default CmsMatchesContent;
