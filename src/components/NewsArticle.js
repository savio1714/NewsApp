import React from "react";

function NewsArticle({data}){

    function click(event){
        event.preventDefault();

    }


return <div>
    
            <div className="news">
            <img className="news__url" src={data.urlToImage} alt="Articles-Image" />
            <h1 className="news__title">{data.title}</h1> 
            <p className="news__content">{data.content}</p>
                <p className="news__description">{data.description}</p>
                <span className="news__author">{data.author}</span>
                <span className="news__published__at">{data.publishedAt}</span>
            
                 
                <button className="button" type="submit" onClick={click} >Add Fav</button>
                
            </div>
           

</div>
}

export default NewsArticle;