import React from "react";
import Slide from "./Slide";

type Props = {
  images: string[];
  slideNumber: number;
  setSlide: (slide: number) => void;
};

const styles = {
  slideActive: {
    display: "block",
    transitionDuration: "1s",
    transform: "translateX(0%)",
    opacity: 1,
  },
  slideInactive: {
    transitionDuration: "1s",
    opacity: 0,
  },
};
const SlidesList = (props: Props) => {
  return (
    <div>
      {props.images.map((image, index) => {
        return (
          <div
            key={index}
            style={
              index === props.slideNumber
                ? styles.slideActive
                : styles.slideInactive
            }
          >
            {index === props.slideNumber && <Slide src={image} />}
          </div>
        );
      })}
    </div>
  );
};

export default SlidesList;
