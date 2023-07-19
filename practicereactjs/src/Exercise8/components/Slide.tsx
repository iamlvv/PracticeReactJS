import React from "react";

type Props = {
  src: string;
};

const styles = {
  // create slide animation here
  slide: {
    position: "absolute" as "absolute",
    left: "0%",
    width: "100%",
    height: "100%",
    transitionDuration: "1s",
    transform: "translateX(0%)",
    opacity: 1,
  },
};
const Slide = (props: Props) => {
  const [isHover, setIsHover] = React.useState(false);

  return <img src={props.src} alt="slide" />;
};

export default Slide;
