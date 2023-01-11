import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-api-dt2l.onrender.com/api/",
});

export const fetchArticles = () => {
  return myApi.get("articles").then((res) => {
    return res.data.articles;
  });
};

export const fetchArticlesById = (article_id) => {
  return myApi.get(`articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return myApi.get(`articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
