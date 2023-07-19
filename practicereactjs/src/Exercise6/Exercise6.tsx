import React from "react";
import inputData from "./input.json";
import NavigationBar from "../components/NavigationBar";
type Props = {};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
    width: "1000px",
    margin: "auto",
    padding: "10px",
    backgroundColor: "#def8dd",
  },
  card: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    boxShadow: "0 4px 8px #D9D9D9",
    backgroundColor: "#fff",
    padding: "10px",
  },
};
const Exercise6 = (props: Props) => {
  return (
    <div>
      <NavigationBar />
      <div style={styles.container}>
        {inputData.map((item, index) => {
          return (
            <div key={item.id} style={styles.card}>
              <h1>{item.setup}</h1>
              <p>{item.punchline}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise6;
