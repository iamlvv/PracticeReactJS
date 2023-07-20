import React from "react";
import NavigationBar from "../components/NavigationBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {};

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
      return item
        .toLowerCase()
        .includes(searchWord.replaceAll(" ", "").toLowerCase());
    });
    if (searchWord !== "") {
      setFilteredResult(filtered);
    } else {
      setFilteredResult(array);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={search || ""}
              onChange={handleSearch}
            />
          </Box>
        </div>
        <div>
          <h2>Result</h2>
          {filteredResult.length !== 0 ? (
            filteredResult.map((item, index) => {
              return <div key={index}>{item}</div>;
            })
          ) : (
            <div style={{ color: "red" }}>No result.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise7;
