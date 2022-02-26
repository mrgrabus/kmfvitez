import { useEffect, useState } from "react";
import DashboardCard from "../UI/DashboardCard";
import styles from "./CmsDashboard.module.css";

const CmsDashboard = () => {
  const [data, setData] = useState();
  const apiCall = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/news/count");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <div className={styles.content}>
      <div className="pt-5 ps-3">
        <h3>
          <span className={styles.hello}>Hi Admin,</span> your dashboard is all set
        </h3>
      </div>
      <div className="d-flex justify-content-between align-center ps-3 pe-3 pt-4">
        <DashboardCard count={data?.count} text="Articles Published"/>
        <DashboardCard count={data?.matches} text="Matches Created"/>
      </div>
    </div>
  );
};

export default CmsDashboard;
