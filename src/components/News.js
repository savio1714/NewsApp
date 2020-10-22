import React, { useContext } from "react";
import {NewsContext} from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Pagination, { usePagination } from "./Pagination";



function News(){

    const {data}=useContext(NewsContext);
    

    return <div>
        <div className="all__news">
        {data ? data.articles.map((news,index) => 
            
        <NewsArticle data={news}  key={index}/>
        ): "Loading"}
    </div>
    <Pagination data={data}/>
    </div>
    

}

export default News;