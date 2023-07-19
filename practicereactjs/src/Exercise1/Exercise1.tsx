import React from "react";
import NavigationBar from "../components/NavigationBar";

type Props = {};

const styles = {
  container: {
    backgroundColor: "yellow",
    width: "300px",
    height: "500px",
    margin: "auto",
  },
  p: {
    textAlign: "center" as "center",
    position: "relative" as "relative",
    top: "50%",
  },
};
function Exercise1({}: Props) {
  return (
    <div>
      <NavigationBar />
      <div style={styles.container}>
        <p style={styles.p}>Hello, World!</p>
      </div>
    </div>
  );
}

export default Exercise1;
