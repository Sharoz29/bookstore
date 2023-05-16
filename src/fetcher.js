import { useState, useEffect } from "react";

const useFetcher = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const dataResponse = await fetch(url);
      const dataArr = await dataResponse.json();
      const dataR = dataArr.results;
      setData(dataR);
    }
    getData();
  }, [url]);

  return [data];
};

export default useFetcher;
