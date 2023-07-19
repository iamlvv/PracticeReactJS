import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Exercise1 from "./Exercise1/Exercise1";
import Exercise2 from "./Exercise2/Exercise2";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise4 from "./Exercise4/Exercise4";
import Exercise5 from "./Exercise5/Exercise5";
import Exercise6 from "./Exercise6/Exercise6";
import Exercise7 from "./Exercise7/Exercise7";
import Exercise8 from "./Exercise8/Exercise8";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise9 from "./Exercise9/Exercise9";

const styles = {
  heading: {
    color: "red",
  },
  container: {
    marginBottom: "10px",
  },
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Exercise1 />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
          <Route path="/exercise5" element={<Exercise5 />} />
          <Route path="/exercise6" element={<Exercise6 />} />
          <Route path="/exercise7" element={<Exercise7 />} />
          <Route path="/exercise8" element={<Exercise8 />} />
          <Route path="/exercise9" element={<Exercise9 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
