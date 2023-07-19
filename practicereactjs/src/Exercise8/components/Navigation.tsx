import React from "react";

type Props = {
  images: string[];
  slideNumber: number;
  setSlide: (slide: number) => void;
  setPauseAutoSlide: (pause: boolean) => void;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center" as "center",
    columnGap: "10px",
    borderRadius: "10px",
    padding: "10px",
    position: "absolute" as "absolute",
    top: "380px",
    left: "50%",
    right: "50%",
  },
  imgActive: {
    width: "70px",
    height: "auto",
    border: "2px solid #fff",
    borderRadius: "10px",
    cursor: "pointer",
  },
  imgInActive: {
    width: "70px",
    height: "auto",
    opacity: 0.5,
    cursor: "pointer",
  },
};
function Navigation(props: Props) {
  return (
    <div style={styles.container}>
      {props.images.map((image, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.setSlide(index);
              props.setPauseAutoSlide(false);
            }}
          >
            <img
              src={image}
              alt={image}
              style={
                index === props.slideNumber
                  ? styles.imgActive
                  : styles.imgInActive
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
