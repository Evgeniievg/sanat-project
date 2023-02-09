import React, { useEffect, useState } from 'react';

const ArticlePage = ({ match }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const articleId = match.params.id;
      const response = await fetch(`/api/articles/${articleId}`);
      const data = await response.json();
      setArticle(data);
    };
    fetchArticle();
  }, [match.params.id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.body}</p>
    </div>
  );
};

export default ArticlePage;
