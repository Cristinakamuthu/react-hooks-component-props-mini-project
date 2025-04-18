import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";


let data =  blogData

function App() {
  return (
    <div className="App">
      <Header name={data.name}/>
      <About image={data.image} about={data.about}/>
      <ArticleList posts= {data.posts}/>
      <Article title ={data.title} date = {data.date} preview={data.preview}/>
    </div>
  );
}

export default App;
