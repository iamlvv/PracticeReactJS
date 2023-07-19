import React from "react";
import { LuDog, LuCat } from "react-icons/lu";
import { GiChicken } from "react-icons/gi";
import { PiHorse } from "react-icons/pi";
import { FaCow } from "react-icons/fa6";
import NavigationBar from "../components/NavigationBar";

type Props = {};

type flexDirection =
  | "row"
  | "column"
  | "row-reverse"
  | "column-reverse"
  | "initial"
  | "inherit"
  | "unset"
  | undefined;
type textAlign =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "initial"
  | "inherit"
  | "unset"
  | undefined;

const styles = {
  container: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "column" as flexDirection,
    justifyContent: "center",
    width: "200px",
    margin: "auto",
  },
  item: {
    border: "1px solid black",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "left" as textAlign,
    columnGap: "10px",
    padding: "10px",
  },
  itemIcon: {
    textAlign: "right" as textAlign,
  },
};
function Exercise2({}: Props) {
  const array: string[] = ["dog", "cat", "chicken", "cow", "horse"];
  return (
    <div>
      <NavigationBar />
      <div style={styles.container}>
        {array.map((item, index) => {
          return (
            <div key={index} style={styles.item}>
              <div style={styles.itemIcon}>
                {item === "dog" && <LuDog />}
                {item === "cat" && <LuCat />}
                {item === "chicken" && <GiChicken />}
                {item === "cow" && <FaCow />}
                {item === "horse" && <PiHorse />}
              </div>
              <div>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exercise2;
