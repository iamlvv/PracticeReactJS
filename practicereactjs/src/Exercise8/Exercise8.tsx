import React, { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SlidesList from "./components/SlidesList";
import Navigation from "./components/Navigation";

type Props = {};

const styles = {
  arrow: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center" as "center",
    columnGap: "10px",
    alignItems: "center" as "center",
  },
};
const Exercise8 = (props: Props) => {
  const array: string[] = [
    "https://kenwheeler.github.io/slick/img/fonz3.png",
    "https://kenwheeler.github.io/slick/img/fonz2.png",
    "https://kenwheeler.github.io/slick/img/fonz1.png",
  ];

  const [images, setImages] = React.useState(array);
  const [slide, setSlide] = React.useState(0);
  const [pauseAutoSlide, setPauseAutoSlide] = React.useState(false);

  const nextSlide = () => {
    if (slide < images.length - 1) {
      setSlide(slide + 1);
      setPauseAutoSlide(false);
    } else {
      setSlide(0);
      setPauseAutoSlide(false);
    }
  };
  const previousSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
      setPauseAutoSlide(false);
    } else {
      setSlide(images.length - 1);
      setPauseAutoSlide(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    if (pauseAutoSlide) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div>
      <NavigationBar />
      <div style={styles.container}>
        <div>
          <IoIosArrowBack style={styles.arrow} onClick={previousSlide} />
        </div>
        <div>
          <div onClick={() => setPauseAutoSlide(true)}>
            <SlidesList
              images={images}
              slideNumber={slide}
              setSlide={setSlide}
            />
          </div>
          <Navigation
            images={images}
            slideNumber={slide}
            setSlide={setSlide}
            setPauseAutoSlide={setPauseAutoSlide}
          />
        </div>
        <div>
          <IoIosArrowForward style={styles.arrow} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Exercise8;
