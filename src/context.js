
import React, { useState, useContext} from 'react'
// make sure to use https
import useFetch from './useFetch';
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=489b5133`;
const AppContext = React.createContext()
//${process.env.MOVIEAPP_API_KEY}

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('Kong');
  const { isLoading, data: movies ,error} = useFetch(`?s=${query}`);
  return (
    <AppContext.Provider value={{ isLoading, movies, error, query, setQuery}}>
      {children}
    </AppContext.Provider>
  )
}
export const useCustomContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }