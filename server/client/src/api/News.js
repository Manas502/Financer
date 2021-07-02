import dotenv from 'dotenv';
dotenv.config();
import { NEWS_API_KEY } from '../config';
const apiKey = process.env.REACT_APP_NewsAPI;

export const getBitcoinArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
// async componentDidMount() {
//   try {
//     const response = await getBitcoinArticles();
//     this.setState({ articles: response.articles });
//   } catch (error) {
//     this.setState({ apiError: "Could not find any articles" });
//   }
// }
