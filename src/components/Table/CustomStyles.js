export const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "1.2rem",
      backgroundColor: "rgb(31 41 55)",
      color: "white",
      paddingLeft: "20px",
      // paddingRight: "8px",
    },
  },
  cells: {
    style: {
      color: "rgb(217, 217, 217)",
      fontSize: "1rem",
      paddingLeft: "20px",
      // paddingRight: "8px",
      backgroundColor: "rgb(40, 40, 40, 0.2)",
    },
  },
};

export const conditionalCellStyles = [
  {
    when: (row) => row.status == "Accepted",
    style: {
      color: "rgb(69, 216, 69)",
    },
  },
  {
    when: (row) => row.status == "Rejected",
    style: {
      color: "red",
    },
  },
  {
    when: (row) => row.status == "Partially Accepted",
    style: {
      color: "#21B6A8",
    },
  },
];

export const createtheme = [
  ("solarized",
  {
    text: {
      primary: "cyan",
      secondary: "cyan",
    },
    background: {
      default: "#000",
    },
  },
  "dark"),
];
