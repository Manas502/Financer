
import React from "react";
import NewsArticle from "./NewsArticle";


import NewsContextProvider from './NewsContext';
import News from "./News";
import "./News.css";
function NewsRender() {
  return (
    <NewsContextProvider>
      <News />
      {/* <NewsArticle /> */}
    </NewsContextProvider>
  );
}

export default NewsRender