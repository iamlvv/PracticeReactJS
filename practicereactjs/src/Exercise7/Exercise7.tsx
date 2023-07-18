import React from "react";

type Props = {};

const styles = {
  inputField: {
    padding: "10px",
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    width: "300px",
    margin: "auto",
    outline: "none",
  },
};
const Exercise7 = (props: Props) => {
  const array: string[] = [
    "Apple",
    "Banana",
    "Tea",
    "Coffee",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [search, setSearch] = React.useState("");
  const [filteredResult, setFilteredResult] = React.useState<string[]>(array);

  // Handle Search
  const handleSearch = (e: any) => {
    const searchWord = e.target.value;
    setSearch(searchWord);
    const filtered = array.filter((item) => {
      return item.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord !== "") {
      setFilteredResult(filtered);
    } else {
      setFilteredResult(array);
    }
  };

  return (
    <div>
      <div>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search"
          value={search || ""}
          onChange={handleSearch}
          style={styles.inputField}
        />
      </div>
      <div>
        <h2>Result</h2>
        {filteredResult.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Exercise7;
