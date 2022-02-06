import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { Link, useParams, Route, Routes } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ContestHeader from "../../components/ContestHeader/ContestHeader";
import Problem from "../EditorPage/Problem";
import AllSubmission from "../Submission/AllSubmission";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import DataTable from "react-data-table-component";
import NotFound from "../../components/NotFound/NotFound";
import ViewSubmission from "../Submission/ViewSubmission";

function ContestDashBoard() {
  const [question, setQuestion] = useState([]);
  const [data, setData] = useState({ status: { description: "", time: 0 } });
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    if (contestId) {
      Requests.getQuestions(contestId)
        .then((res) => {
          setQuestion(res.data);
        })
        .catch((error) => {});
      Requests.getContestById(contestId).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    }
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Max Score",
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: "Solve",
      button: true,
      cell: (row) => (
        <div>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
          >
            <Link to={`${row._id}`}>Solve</Link>
          </button>
        </div>
      ),
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

  return isLoading ? (
    <div>
      <Loader></Loader>
    </div>
  ) : (
    <div className=" max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <ContestHeader data={data} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen pt-4">
              <div className="">
                <h1 className="text-xl font-semibold text-cyan-500">
                  Problem Solving
                </h1>
              </div>
              <div className="mt-4 flex flex-col">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <DataTable
                    columns={columns}
                    data={question}
                    customStyles={customStyles}
                  />
                </div>
              </div>
            </div>
          }
        />
        <Route path=":questionId" element={<Problem />} />
        <Route path="submission" element={<AllSubmission />} />
        <Route path="submission/:submissionId" element={<ViewSubmission />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps)(ContestDashBoard);
