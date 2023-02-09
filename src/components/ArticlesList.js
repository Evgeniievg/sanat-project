import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <ul>
      {articles.map(article => (
        <li key={article._id}>
          <Link to={`/articles/${article._id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
