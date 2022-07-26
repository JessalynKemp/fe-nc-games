import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./contexts/User";
import { CategoryContext } from "./contexts/SelectedCategory";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ReviewList from "./components/ReviewList";
import React from "react";

function App() {
  const [user, setUser] = useState({
    username: "guestaccount",
    name: "Guest Account",
    avatar_url: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360",
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <CategoryContext.Provider
          value={{ selectedCategory, setSelectedCategory }}
        >
          <div className="app"></div>
          <header>
            <Header />
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/:category" element={<ReviewList />} />
          </Routes>
        </CategoryContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
