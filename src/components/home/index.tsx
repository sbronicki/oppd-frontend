import React from "react";
import CountDown from "../countdown";
import CreatePost from "../createPost";
import Posts from "../post/posts";

function Home() {
  return (
    <div className="home-page">
      <CountDown />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default Home;
