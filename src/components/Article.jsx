import React from 'react'
import App from './App'
import ArticleList from './ArticleList'

const Article = ({title, date, preview}) => {
    const dates = !date ? "January 1, 1970" : date
    return (
 <article>
    <h3>
        {title}
    </h3>
    <small>{dates}</small>
    <p>{preview}</p>
 </article>
  )
}

export default Article