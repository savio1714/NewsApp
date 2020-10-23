import React, { useContext } from "react";
import {NewsContext} from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Pagination, { usePagination } from "./Pagination";
import SearchArticles from './SearchArticles';



function News(){

    const {data}=useContext(NewsContext);
    // console.log(data);
    function onSearch(){
        return console.log("test");
    }

    return <div>
        <SearchArticles onSearch={onSearch}/>
        <div className="all__news">
        {data ? data.articles.map((news,index) => 
            
        <NewsArticle data={news}  key={index}/>
        ): "Loading"}
    </div>
    <Pagination data={data}/>
    </div>
    

}

export default News;