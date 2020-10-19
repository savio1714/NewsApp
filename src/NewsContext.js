import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

   

  const [data, setData] = useState();
  // const [currentPage,setcurrentPage]= useState(1);
  // const [postsPerPage,setPostsPerPage]= useState(5);
  const apiKey = "29160c2eda124512a196ab00de96775b";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);


  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost -postsPerPage;
  // const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);

  return (
    <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
  );
};