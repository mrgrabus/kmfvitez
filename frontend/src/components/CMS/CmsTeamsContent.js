import styles from "./CmsMatchesContent.module.css";
import player from "../../assets/Img/player.svg";
import React, { useEffect, useState } from "react";
import dots from "../../assets/Img/dots.svg";
import { Dropdown, Table } from "react-bootstrap";
import axios from "axios";
import CmsNewTeamModal from "./CmsNewTeamModal";

const CmsTeamsContent = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [matchToEdit, setMatchToEdit] = useState(null);

  const apiCall = async () => {
    try {
      const fetchData = await fetch("http://167.235.50.89:5000/api/teams/");
      const data = await fetchData.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    let token = localStorage.getItem("userToken");
    try {
      await axios.delete(`http://167.235.50.89:5000/api/teams/${matchToEdit}`, {
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
  return (
    <>
      <CmsNewTeamModal
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
              <th>Grb</th>
              <th>Team Name</th>
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
            {data.map((item) => (
              <tr key={item?.id}>
                <td>
                  <div className="d-flex justify-content-center">
                    <div className={styles.imagePreview}>
                      <img src={`http://167.235.50.89:5000/${item?.grb}`} />
                    </div>
                  </div>
                </td>
                <td>
                  {item?.teamName}
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
      </div>
    </>
  );
};

export default CmsTeamsContent;
