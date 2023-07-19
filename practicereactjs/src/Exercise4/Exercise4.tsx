import React from "react";
import NavigationBar from "../components/NavigationBar";

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
        <button type="button" onClick={handleClick}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default Exercise4;
