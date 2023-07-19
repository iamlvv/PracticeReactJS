import React, { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";

type Props = {};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    width: "800px",
    margin: "auto" as "auto",
    padding: "20px",
    backgroundColor: "#def8dd",
  },
  item: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  heading: {
    textAlign: "left" as "left",
    fontWeight: "bold" as "bold",
    marginTop: "10px",
  },
  content: {
    textAlign: "left" as "left",
    marginTop: "10px",
  },
};
const Exercise9 = (props: Props) => {
  const [list, setList] = React.useState([]);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const response = await axios.get(
          "https://random-data-api.com/api/users/random_user?size=10"
        );
        setList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, []);
  return (
    <div>
      <NavigationBar />
      <div style={styles.container}>
        {list.map((item: any, index: number) => {
          return (
            <div key={index} style={styles.item}>
              <div>
                <img src={item.avatar} alt={item.first_name} />
              </div>
              <div style={styles.heading}>
                {item.first_name + " " + item.last_name}
              </div>
              <div style={styles.content}>{item.employment.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise9;
