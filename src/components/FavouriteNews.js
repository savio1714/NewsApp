import React from "react";

function FavouriteNews({data}){

return <div>
    
            <div className="news">
            <img className="news__url" src={data.urlToImage} alt="Articles-Image" />
            <h1 className="news__title">{data.title}</h1> 
            <p className="news__content">{data.content}</p>
                <p className="news__description">{data.description}</p>
                <span className="news__author">{data.author}</span>
                <span className="news__published__at">{data.publishedAt}</span>
            
                
            </div>
           

</div>
}

export default FavouriteNews;