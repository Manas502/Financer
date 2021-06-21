import React, { useContext } from 'react'
import { NewsContext } from './NewsContext'
import NewsArticle from './NewsArticle'
import './News.css'
function News(props) {
    const data = useContext(NewsContext);

    return (
        <div className="all_news">
            {data? data.articles.map((news) => (
                <NewsArticle data={news} key={news.url} />
            )) : "Loading..."}
        </div>
    );
}

export default News
 