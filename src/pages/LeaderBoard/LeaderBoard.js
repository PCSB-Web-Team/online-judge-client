import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    {
      name: "Max Score",
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
                <DataTableExtensions
                  columns={columns}
                  data={data}
                  print={false}
                  export={false}
                >
                  <DataTable
                    customStyles={customStyles}
                    progressPending={isLoading}
                    pagination
                    highlightOnHover
                    fixedHeader
                    fixedHeaderScrollHeight="800px"
                  />
                </DataTableExtensions>
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
