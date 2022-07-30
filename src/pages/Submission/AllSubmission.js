import React, { useEffect, useState } from "react";
import { Requests } from "../../api/Index";
import { Link } from "react-router-dom";
import DataTable, { createTheme } from "react-data-table-component";
import moment from "moment";
import {
  customStyles,
  conditionalCellStyles,
} from "../../components/Table/CustomStyles";

function AllSubmission() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const theme = localStorage.getItem("theme");
    
  const columns = [
    {
      name: "Title",
      selector: (row) => row.questionName,
      sortable: true,
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      conditionalCellStyles,
    },
    {
      name: "When Submitted",
      selector: (row) =>
        moment(row.timestamp).format("h:mm:ss a ,ddd , MMM Do"),
      sortable: true,
    },
    {
      name: "View",
      button: true,
      cell: (row) => (
        <div className="text-center">
          <Link to={`${row._id}`}>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
            >
              View
            </button>
          </Link>
        </div>
      ),
      conditionalCellStyles,
    },
  ];

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    setIsLoading(true);
    Requests.submissionByUserId(userId)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {!data ? (
        "No Submission at present !!"
      ) : (
        <div className="contest_dashboard text-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb- flex">
              <h1 className="text-2xl text-cyan-500 font-semibold">
                Submission
              </h1>
            </div>
            <div className="mt-4 flex flex-col">
              <div className="shadow overflow-hidden border-b border-gray-200  sm:rounded-lg">
                <DataTable
                  columns={columns}
                  data={data}
                  customStyles={customStyles}
                  progressPending={isLoading}
                  theme="solarized"
                  pagination
                  highlightOnHover
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

export default AllSubmission;
