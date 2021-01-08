import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((getData) => {
        setData(getData.data)
      })
  }, [url]);
  return data;
};

export default useFetch;