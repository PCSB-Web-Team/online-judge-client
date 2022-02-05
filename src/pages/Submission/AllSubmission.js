import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import DataTable , { createTheme } from "react-data-table-component";

function AllSubmission() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.questionName,
      sortable: true,
    },
    {
      name: "Max Score",
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status.description,
      sortable: true,
    },
    {
      name:"View",
      button: true,
      cell: (row) => (
        <div class="text-center">
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">
            <Link to={`/${row.contestId}/submission/questionId`}>View</Link> 
          </button>
        </div>
      )
    }
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", 
      },
    },
    headCells: {
      style: {
        fontSize:"1.2rem",
        backgroundColor: "lightgray",
        paddingLeft: "8px", 
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        fontSize:"1rem",
        paddingLeft: "8px", 
        paddingRight: "8px",
      },
    },
  };
  useEffect(() => {
    setIsLoading(true);
    Requests.allSubmission()
      .then((res) => {
        setData(res.data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {!data ? (
            "No Submission at present !!"
          ) : (
            <div className="contest_dashboard text-gray-900">
              <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="mb-4">
                  <h1 className="text-xl text-cyan-500 font-semibold">
                    Submission
                  </h1>
                </div>
                <div className="mt-4 flex flex-col">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <DataTable columns={columns} data={data} customStyles={customStyles} />
                  </div>
                </div>
              </main>
            </div>
          )}
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

export default connect(mapStateToProps)(AllSubmission);
