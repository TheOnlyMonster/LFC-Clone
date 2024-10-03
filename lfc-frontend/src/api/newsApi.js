import { fetchData } from "./fetchUtils";


export const getNews = async (newsCount, color) => {
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-03&sortBy=publishedAt&apiKey=d9fcd35514e2428fb7dd30e5ffe5bb10`;
  const data = await fetchData(apiUrl);

  if (!data || !data.articles) return [];

  const validArticles = data.articles.filter(
    (article) => article.title && article.description && article.urlToImage
  );

  return validArticles.slice(0, newsCount).map((article) => ({
    ...article,
    color,
  }));
};
