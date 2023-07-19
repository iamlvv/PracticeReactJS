import React from "react";
import { Link, NavLink } from "react-router-dom";

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
  const links: string[] = [
    "/",
    "/exercise1",
    "/exercise2",
    "/exercise3",
    "/exercise4",
    "/exercise5",
    "/exercise6",
    "/exercise7",
    "/exercise8",
    "/exercise9",
  ];
  return (
    <div style={styles.container}>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link}
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          >
            {link === "/" ? "HOME" : link.substring(1).toUpperCase()}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavigationBar;
