import React from 'react';
import logo from './logo.svg';
import './App.css';
import Exercise3 from './Exercise3/Exercise3';
import Exercise1 from './Exercise1/Exercise1';
import Exercise4 from './Exercise4/Exercise4';
import Exercise5 from './Exercise5/Exercise5';

const styles = {
  heading : {
    color: 'red',
  }
}
function App() {
  return (
    <div className="App">
      <h1 style={styles.heading}>Exercise 1</h1>
      <Exercise1 />
      <h1 style={styles.heading}>Exercise 3</h1>
      <Exercise3 />
      <h1 style={styles.heading}>Exercise 4</h1>
      <Exercise4 />
      <h1 style={styles.heading}>Exercise 5</h1>
      <Exercise5 />
    </div>
  );
}

export default App;
