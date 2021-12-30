import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
    setTimeout(() => {
      fetch(url)
    .then(res => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      // auto catches network / connection error
      setIsPending(false);
      setError(err.message);
    })
    }, 1000);
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, isPending, error, fetchData };
}
 
export default useFetch;