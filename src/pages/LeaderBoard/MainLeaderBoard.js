import React, { useMemo, useEffect, useState } from "react";
import { Requests } from "../../api/Index";
import FilterComponent from "../../components/Table/FilterComponent";
import DataTable, {createTheme} from "react-data-table-component";
import { customStyles } from "../../components/Table/CustomStyles";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const theme = localStorage.getItem("theme");
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
    Requests.allParticipant()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {!data ? (
        "No User in LeaderBoard"
      ) : (
        <div className="contest_dashboard text-gray-900 p-12">
          <div className="max-w-6xl mx-auto">
            <div className="DashBoard mb-4">
              <h1 className="text-2xl text-cyan-500 font-semibold">
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
                  progressPending={isLoading}
                  theme="solarized"
                  highlightOnHover
                  pagination
                  subHeader
                  subHeaderComponent={subHeaderComponent}
                  fixedHeader
                  fixedHeaderScrollHeight="700px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
