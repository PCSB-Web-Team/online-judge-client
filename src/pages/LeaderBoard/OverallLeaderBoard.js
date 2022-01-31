import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { userSubmission } from "../../utils/Requests";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function OverallLeaderBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Requests.allParticipant(contestId)
      .then((res) => {
        setData(res.data);
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
                        User
                      </th>
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Problem
                      </th>
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Score
                      </th>
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Max Score
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((participant) => (
                      <tr key={data}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {participant._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {participant.userId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        {participant.score}
                        </td>
                        <td>
                        {participant.score}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
function mapActionToProps(dispatch) {
  return {
    userSubmission: (userData) => dispatch(userSubmission(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(OverallLeaderBoard);
