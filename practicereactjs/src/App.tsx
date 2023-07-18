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
    <div className="App" style={styles.container}>
      <h1 style={styles.heading}>Exercise 1</h1>
      <Exercise1 />
      <h1 style={styles.heading}>Exercise 2</h1>
      <Exercise2 />
      <h1 style={styles.heading}>Exercise 3</h1>
      <Exercise3 />
      <h1 style={styles.heading}>Exercise 4</h1>
      <Exercise4 />
      <h1 style={styles.heading}>Exercise 5</h1>
      <Exercise5 />
      <h1 style={styles.heading}>Exercise 6</h1>
      <Exercise6 />
      <h1 style={styles.heading}>Exercise 7</h1>
      <Exercise7 />
    </div>
  );
}

export default App;
