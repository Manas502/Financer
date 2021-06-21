import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [data, setData] = useState("");
    const apiKey = process.env.REACT_APP_NewsAPI;
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`)
        .then((response) => setData(response.data))
        .catch((err) => {
            if (err.response) {
              console.log(err.response.data);
              this.setState({ error: err.response.data.message });
            }
          });
    }, [])
    return (
        <NewsContext.Provider props={data}>
            {props.children}
        </NewsContext.Provider>
    );
}

export default NewsContextProvider;