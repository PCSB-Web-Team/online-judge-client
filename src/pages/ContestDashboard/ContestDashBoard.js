import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { getQuestions } from "../../utils/Requests";
import { Link, useParams, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader"

function ContestDashboard() {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    Requests.getQuestions(contestId).then(res => {
      setQuestion(res.data);
      setIsLoading(false);
    }).catch((error) => { })
  }, [])

  return (
    <div>
      {isLoading ? (
        <div><Loader></Loader></div>
      ) : (
      <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div class="grid grid-cols-3 divide-x">
        <Link to = "/">Question |</Link>
        <Link to = "/">Submission |</Link>
        <Link to = "/">LeaderBoard</Link>
      </div>
        <div className="DashBoard"><br />
          <h1 className="text-xl font-semibold">Problem Statement</h1>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50">
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
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  question.map((questions) => (
                    <tr key={question}>
                      <td className="px-6 py-4 whitespace-nowrap">{questions.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{questions.score}</td>
                      <td>
                        <Link to={`/${questions.contestId}/${questions._id}`}
                          className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">Solve</Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Outlet />
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
function mapActionToProps(dispatch) {
  return {
    getQuestions: (userData) => dispatch(getQuestions(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(ContestDashboard);
