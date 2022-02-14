import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

const Table = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        fontSize: "1.2rem",
        backgroundColor: "lightgray",
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        backgroundColor: "&:hoverlightgray",
        fontSize: "1rem",
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
  };
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      customStyles={customStyles}
      data={filteredItems}
      defaultSortField="name"
      highlightOnHover
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
      fixedHeaderScrollHeight="800px"
    />
  );
};

export default Table;
