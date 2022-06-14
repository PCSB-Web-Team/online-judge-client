export const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      fontSize: "1.2rem",
      backgroundColor: "#696969",
      color: "white",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      fontSize: "1rem",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

export const conditionalCellStyles = [
  {
    when: (row) => row.status == "Accepted",
    style: {
      color: "green",
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


