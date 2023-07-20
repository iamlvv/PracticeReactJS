// This function is used to remove extra spaces from the input string
function removeSpaces(str) {
  // n is length of the original string
  let n = str.length;

  // i points to next position to be filled in
  // output string/ j points to next character
  // in the original string
  let i = 0,
    j = -1;

  // flag that sets to true is space is found
  let spaceFound = false;

  // Handles leading spaces
  while (++j < n && str[j] == " ");

  // read all characters of original string
  while (j < n) {
    // if current characters is non-space
    if (str[j] != " ") {
      // remove preceding spaces before dot,
      // comma & question mark
      if (
        (str[j] == "." || str[j] == "," || str[j] == "?") &&
        i - 1 >= 0 &&
        str[i - 1] == " "
      )
        str = str.substr(0, i - 1) + str[j++] + str.substr(i);
      // copy current character at index i
      // and increment both i and j
      else str = str.substr(0, i++) + str[j++] + str.substr(i);

      // set space flag to false when any
      // non-space character is found
      spaceFound = false;
    }
    // if current character is a space
    else if (str[j++] == " ") {
      // If space is encountered for the first
      // time after a word, put one space in the
      // output and set space flag to true
      if (!spaceFound) {
        str = str.substr(0, i++) + " " + str.substr(i);
        spaceFound = true;
      }
    }
  }

  // Remove trailing spaces
  if (i <= 1) str = str.substr(0, i);
  else str = str.substr(0, i - 1);

  return str;
}

export { removeSpaces };
