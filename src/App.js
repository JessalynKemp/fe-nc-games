import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <header>
        <Header />
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={ReviewList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
