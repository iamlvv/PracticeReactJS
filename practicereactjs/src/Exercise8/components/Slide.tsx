import React from "react";

type Props = {
  src: string;
};

const Slide = (props: Props) => {
  return <img src={props.src} alt="slide" />;
};

export default Slide;
