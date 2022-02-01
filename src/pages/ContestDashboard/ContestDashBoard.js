import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { Link, useParams, Route, Routes, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ContestHeader from "../EditorPage/ContestHeader";
import Problem from "../EditorPage/Problem";
import AllSubmission from "../Submission/AllSubmission";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import NotFound from "../../components/NotFound/NotFound";

function ContestDashBoard() {
  const [question, setQuestion] = useState([]);
  const [data, setData] = useState({ status: { description: "", time: 0 } });
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    if (contestId) {
      Requests.getQuestions(contestId)
        .then((res) => {
          console.log(res.data);
          setQuestion(res.data);
          setIsLoading(false);
        })
        .catch((error) => {});
      Requests.getContestById(contestId).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader></Loader>
        </div>
      ) : (
        <div className="problem problem-main editor">
          <div className="mb-4">
            <ContestHeader data={data} />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen text-gray-900">
                  <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div className="DashBoard">
                      <h1 className="text-xl font-semibold">Problem Solving</h1>
                    </div>
                    <div className="mt-4 flex flex-col">
                      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full">
                          <thead className="bg-gray-300 p-2">
                            <tr>
                              <th
                                scope="col"
                                className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Title
                              </th>
                              <th
                                scope="col"
                                className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Max Score
                              </th>
                              <th
                                scope="col"
                                className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                              >
                                Solve
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-25 divide-y-2 divide-gray-100">
                            {question.map((questions, index) => (
                              <tr
                                key={index}
                                className="bg-white hover:bg-opacity-50"
                              >
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {questions.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {questions.score}
                                </td>
                                <td>
                                  <Link
                                    to={`${questions._id}`}
                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                                  >
                                    Solve
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </main>
                </div>
              }
            />
            <Route path=":questionId" element={<Problem />} />
            <Route path="submission" element={<AllSubmission />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="" element={<NotFound />} />
          </Routes>
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

export default connect(mapStateToProps)(ContestDashBoard);
