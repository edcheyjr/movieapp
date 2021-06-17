
import React, { useState, useEffect } from 'react';
// const API_ENDPOINT =`${process.env.
// MOVIEAPP_API_KEY}`
// const URL = `${process.env.URL}`
const API_ENDPOINT="&apikey=489b5133"
const URL = "https://www.omdbapi.com/"
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState({ show: false, msg: '' ,response:''});
  

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      // console.log(response);
      const data = await response.json();
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg:'',response:url});
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchMovies(URL+urlParams+API_ENDPOINT);
  }, [urlParams])
  return { isLoading,data, error }
}

export default useFetch;