import React from 'react'
import articles from './articles';

function Content({ id }) {
  const article = articles.find(a => a.id === id);

  return (
    <div className="content">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Content
