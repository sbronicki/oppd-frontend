import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Error from "./components/error";
import Home from "./components/home";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";
import Post from "./components/post/post";
import Posts from "./components/post/posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path="/posts/:postIDFromURL" element={<Post />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={<Error data={{ error: "404 page not found" }} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
