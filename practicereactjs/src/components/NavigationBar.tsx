import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center" as "center",
    columnGap: "10px",
    marginBottom: "20px",
    marginTop: "20px",
  },
};
const NavigationBar = (props: Props) => {
  return (
    <div style={styles.container}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/exercise1">
        <div>Exercise 1</div>
      </Link>
      <Link to="/exercise2">
        <div>Exercise 2</div>
      </Link>
      <Link to="/exercise3">
        <div>Exercise 3</div>
      </Link>
      <Link to="/exercise4">
        <div>Exercise 4</div>
      </Link>
      <Link to="/exercise5">
        <div>Exercise 5</div>
      </Link>
      <Link to="/exercise6">
        <div>Exercise 6</div>
      </Link>
      <Link to="/exercise7">
        <div>Exercise 7</div>
      </Link>
      <Link to="/exercise8">
        <div>Exercise 8</div>
      </Link>
      <Link to="/exercise9">
        <div>Exercise 9</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
