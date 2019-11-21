import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article>
      <div className='image'>
      <img src={img} alt="inaccessible" />
      </div>
      <div className='text'>
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>Link to article</a>
      </div>
    </article>
  )
}

export default NewsArticle;