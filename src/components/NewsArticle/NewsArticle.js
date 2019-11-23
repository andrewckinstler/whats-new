import React from 'react';
import PropTypes from 'prop-types';
import './NewsArticle.css';

const NewsArticle = ({headline, img, description, url}) => {
  return (
    <article>
      <div className='image' style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className='text'>
      <h2 className='headline'>{headline}</h2>
      <p>{description}</p>
      </div>
      <div className='link'>
      <a href={url}>Link to article</a>
      </div>
    </article>
  )
}

NewsArticle.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}

export default NewsArticle;