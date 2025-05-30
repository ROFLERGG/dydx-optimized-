import { useEffect, useState } from 'react';

const cache = {};

const useFetch = url => {
  const [data, setData] = useState(cache[url] || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cache[url]) {
      setData(cache[url]);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data) {
            setTimeout(() => {
              cache[url] = data;
              setData(data);
              setIsLoading(false);
            }, 500);
          }
        })
        .catch(err => {
          console.log('Error: ', err);
          setIsLoading(false);
        });
    }
  }, [url]);
  return { data, isLoading };
};
export default useFetch;
