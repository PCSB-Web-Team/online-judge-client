import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { userSubmission } from "../../utils/Requests";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    console.log(contestId);
    if (contestId) {
      Requests.contestRanking(contestId)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="min-h-screen text-gray-900 ">
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="DashBoard mb-4">
              <h1 className="text-xl font-semibold">Leader Board</h1>
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
                        Problem
                      </th>
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        view
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((participant, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {participant._id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {participant.score}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {participant.score}
                        </td>
                        <td>{participant.score}</td>
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

export default connect(mapStateToProps, mapActionToProps)(LeaderBoard);
