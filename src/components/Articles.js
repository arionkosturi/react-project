import React, { useState } from 'react'
import axios from 'axios'
const api = axios.create(
  {
    baseURL: 'http://localhost:3344/news/'
  })
function Articles() {
  const [articles, setArticles] = useState([])
  React.useEffect(() => {
    api.get('/').then(res => {
      setArticles(res.data)
    })
  
    // return () => {
    //   second
    // }
  }, [])
  
  return (
    articles.map(article=>{
      return (
        <>
        <img src={article.imgUrl} />
      <h1 className='font-bold p-2 text-purple-400'>{article.title}</h1>
      </>
    )

     })
  
    )
}

export default Articles


