import axios from 'axios';

const myApi = axios.create({
  baseURL: 'https://nc-news-api-dt2l.onrender.com/api/',
});

export const fetchArticles = () =>{
    return myApi.get("articles").then((res)=>{
        return res.data.articles;
    })
}