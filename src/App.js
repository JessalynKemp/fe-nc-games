import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserContext } from "./contexts/User";
import React from "react";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ReviewList from "./components/ReviewList";
import SingleReview from "./components/SingleReview";

function App() {
  const [user, setUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <div className="app"></div>
        <header>
          <Header />
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/:category" element={<ReviewList />} />
          <Route path="/:category/:review_id" element={<SingleReview />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
