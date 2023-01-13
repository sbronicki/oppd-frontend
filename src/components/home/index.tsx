import React, { useState } from "react";
import CountDown from "../countdown";
import CreatePost from "../createPost";
import Posts from "../post/posts";

function Home() {
  const [newPostAdded, setNewPostAdded] = useState(false);
  const onAddNewPostAdded = () => setNewPostAdded(true);

  return (
    <div className="home-page">
      <CountDown />
      <CreatePost onAddNewPostAdded={onAddNewPostAdded} />
      <Posts newPostAdded={newPostAdded} />
    </div>
  );
}

export default Home;
