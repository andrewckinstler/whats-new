import React, { Component } from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';


const NewsContainer = ({articles}) => {

  const articleCards = articles.map(({id, headline, img, description, url}) => {
    return (
      <NewsArticle 
        key={id}
        headline={headline}
        img={img}
        description={description}
        url={url}
      />
    )
  })

  return (
    <section className='container'>
      {articleCards}
    </section>
  )
}


export default NewsContainer;