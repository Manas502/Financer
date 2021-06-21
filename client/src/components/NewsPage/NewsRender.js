
import React from "react";
import NewsContextProvider from './NewsContext';
import News from "./News";
import "./News.css";

// import NewsArticle from "./NewsArticle";
function NewsRender() {
  return (
    <NewsContextProvider>
      <News />
      {/* <NewsArticle /> */}
    </NewsContextProvider>
  );
}

export default NewsRender;