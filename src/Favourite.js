import React,{useEffect,useState} from 'react';
import FavouriteNews from "./components/FavouriteNews";

function Favourite() {
  let [news, setNews] = useState([]);
  
  useEffect(() => {
    const newsItem = JSON.parse(window.localStorage.getItem('news'));
    
    if (newsItem) {
      setNews([{
        title: newsItem.title,
        content: newsItem.content,
        urlToImage: newsItem.urlToImage,
        description: newsItem.description,
        author: newsItem.author,
        publishedAt: newsItem.publishedAt

      
      }]); // Set user data    
  }

     
}, [])
// console.log(news);


  return (<div>

<div className="all__news">
  {news ? news.map((favNews,index)=>
    <FavouriteNews data={favNews} key={index}/>
    
  
  ):"Loading"}
</div>
           
           
  </div>
  );
}

export default Favourite;
