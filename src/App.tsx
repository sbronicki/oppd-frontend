import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import Navigation from "./components/navigation";
import PageLayout from "./components/pageLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
