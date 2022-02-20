import { useEffect, useState } from "react";

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
    <>
      <h1>{data}</h1>
    </>
  );
};

export default CmsDashboard;
