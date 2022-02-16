import React, { useMemo, useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import FilterComponent from "../../components/Table/FilterComponent";
import DataTable from "react-data-table-component";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { contestId } = useParams();

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

  const filteredItems = data.filter(
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

  useEffect(() => {
    setIsLoading(true);
    if (contestId) {
      Requests.contestRanking(contestId)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <div>
      {!data ? (
        "No User in LeaderBoard"
      ) : (
        <div className="contest_dashboard text-gray-900 ">
          <main>
            <div className="DashBoard mb-4">
              <h1 className="text-xl text-cyan-500 font-semibold">
                Leader Board
              </h1>
            </div>
            <div className="mt-4 flex flex-col">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
