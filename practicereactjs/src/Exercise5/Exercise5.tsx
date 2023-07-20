import React from "react";
import NavigationBar from "../components/NavigationBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { removeSpaces } from "./inputActions";

type Props = {};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "10px",
  },
  inputField: {
    padding: "10px",
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    width: "300px",
    margin: "auto",
    outline: "none",
  },
  button: {
    padding: "10px",
    border: "1px solid #D9D9D9",
    borderRadius: "5px",
    backgroundColor: "#fd1941",
    color: "white",
    width: "322px",
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};
const Exercise5 = (props: Props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("Please enter your first name and last name");
      return;
    }
    alert("Hello, " + removeSpaces(firstName) + " " + removeSpaces(lastName));
  };
  return (
    <div>
      <NavigationBar />
      <div>
        <form onSubmit={handleSubmit} style={styles.form}>
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
                label="First Name"
                variant="outlined"
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Box>
          </div>
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
                label="Last Name"
                variant="outlined"
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
          </div>
          <div>
            <Button variant="contained" type="submit">
              Greet me
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Exercise5;
