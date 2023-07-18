import React from "react";

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
  },
};
const Exercise5 = (props: Props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Hello, " + firstName + " " + lastName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.inputField}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.inputField}
            required
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Greet me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Exercise5;
