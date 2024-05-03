import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Reports  from "./Components/Reports/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-white-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
