import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { getContests, getQuestions } from "../../utils/Requests";
import { Link, useParams, Outlet } from "react-router-dom";

function ContestDashboard() {
  const [data, setData] = useState([]);
  const { contestId } = useParams();

  useEffect(() => {
    Requests.getQuestions()
      .then((res) => {
        setData(res.data);
        getContests(contestId);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="DashBoard">
          <br />
          <br />
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
                {data.map((question) => (
                  <tr key={contestId}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {question.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {question.number}
                    </td>
                    <td>
                      <Link
                        to={`/${question.contestId}/${question._id}`}
                        className="btn btn-small "
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
      <Outlet />
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
