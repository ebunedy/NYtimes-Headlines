import React, { useContext, useState, useEffect } from 'react';
import data from './data';
import Util from './util';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [nav] = useState(data);
  const [param, setParam] = useState('home');
  const [btnNumber, setBtnNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [newsPage, setNewsPage] = useState([]);
  const [newsLength, setNewsLength] = useState(0);

  const url = `https://api.nytimes.com/svc/topstories/v2/${param}.json?api-key=${process.env.REACT_APP_APP_ID}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        const news = Util(results, 12);
        setNewsLength(news.length);
        setNewsPage(news[page]);
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          console.log('error fetching data');
        }
      });
  }, [param, page, newsLength, setPage, url]);

  const setNewParams = (id) => {
    const parameter = nav.find((item) => item.id === id);
    if (parameter) {
      setParam(parameter.name);
      setBtnNumber(parameter.id);
    }
    return '';
  };

  const checkNumber = (number) => {
    if (number > newsLength - 1) {
      return 0;
    }
    if (number < 0) {
      return newsLength - 1;
    }
    return number;
  };

  const nextPage = () => {
    setPage(checkNumber(page + 1));
  };

  const prevPage = () => {
    setPage(checkNumber(page - 1));
  };

  return (
    <AppContext.Provider
      value={{
        nav,
        param,
        btnNumber,
        setNewParams,
        loading,
        newsPage,
        nextPage,
        prevPage,
        setPage,
        newsLength,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
