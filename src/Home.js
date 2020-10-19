import React from 'react';
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";


function Home() {
  return (
    <NewsContextProvider>
    <News/>
</NewsContextProvider>

  );
}

export default Home;
