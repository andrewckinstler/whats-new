import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article>
      <div className='image' style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className='text'>
      <h3>{headline}</h3>
      <p>{description}</p>
      </div>
      <div className='link'>
      <a href={url}>Link to article</a>
      </div>
    </article>
  )
}

export default NewsArticle;