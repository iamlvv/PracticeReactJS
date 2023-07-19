import React from "react";
import NavigationBar from "../components/NavigationBar";
import Button from "@mui/material/Button";
type Props = {};

const Exercise4 = (props: Props) => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <NavigationBar />
      <div>
        <h2>Button has been clicked: {count} times</h2>
        <Button variant="contained" onClick={handleClick}>
          Click me
        </Button>
      </div>
    </div>
  );
};

export default Exercise4;
