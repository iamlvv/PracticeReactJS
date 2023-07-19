import React from "react";
import NavigationBar from "../components/NavigationBar";

type Props = {};

const styles = {
  container: {
    width: "200px",
    margin: "auto",
  },
  formItem: {
    display: "flex",
    flexDirection: "row" as "row",
    columnGap: "10px",
  },
  checkedResult: {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "10px",
  },
  result: {
    marginRight: "10px",
  },
};
function Exercise3({}: Props) {
  const array: string[] = ["apple", "banana", "tea", "coffee"];
  const [appleChecked, setAppleChecked] = React.useState(false);
  const [bananaChecked, setBananaChecked] = React.useState(false);
  const [teaChecked, setTeaChecked] = React.useState(false);
  const [coffeeChecked, setCoffeeChecked] = React.useState(false);
  return (
    <div>
      <NavigationBar />
      <div>
        <h2>Your Check List</h2>
        <form style={styles.container}>
          {array.map((item, index) => {
            return (
              <div key={index} style={styles.formItem}>
                <div>
                  <input
                    type="checkbox"
                    id={item}
                    name={item}
                    value={item}
                    onChange={(e) => {
                      if (e.target.value === "apple") {
                        setAppleChecked(!appleChecked);
                      } else if (e.target.value === "banana") {
                        setBananaChecked(!bananaChecked);
                      } else if (e.target.value === "tea") {
                        setTeaChecked(!teaChecked);
                      } else if (e.target.value === "coffee") {
                        setCoffeeChecked(!coffeeChecked);
                      }
                    }}
                  />
                </div>
                <div>
                  <label htmlFor={item}>{item}</label>
                </div>
              </div>
            );
          })}
        </form>
        <div style={styles.checkedResult}>
          <h2>Items has been checked:</h2>
          <div>
            {appleChecked && <span style={styles.result}>Apple</span>}
            {bananaChecked && <span style={styles.result}>Banana</span>}
            {teaChecked && <span style={styles.result}>Tea</span>}
            {coffeeChecked && <span style={styles.result}>Coffee</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise3;
