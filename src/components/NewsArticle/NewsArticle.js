import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article>
      <img src={img} alt="inaccessible" />
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Link to article</a>
    </article>
  )
}

export default NewsArticle;