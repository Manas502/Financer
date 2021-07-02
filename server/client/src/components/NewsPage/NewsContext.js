import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = process.env.REACT_APP_MEDIASTACK;
    useEffect(() => {
        // axios.get(`http://newsapi.org/v2/everything?q=rich&from=2020-07-19&sortBy=publishedAt&apiKey=${apiKey}`)
       axios.get(`http://api.mediastack.com/v1/news
       ? access_key = ${apiKey}
       & keywords = bitcoin`)
        .then((response) => setData(response.data))
        .catch((err) => {
            if (err.response) {
              console.log(err.response.data);
              
            }
          });
    }, [])
    return (
        <NewsContext.Provider props={{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
}

export default NewsContextProvider;