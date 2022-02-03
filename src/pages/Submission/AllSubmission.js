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
                <div className="DashBoard mb-4">
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
