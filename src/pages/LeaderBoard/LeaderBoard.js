import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import _ from "lodash";

function LeaderBoard() {
  const pageSize = 1;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { contestId } = useParams();
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    console.log(contestId);
    if (contestId) {
      Requests.contestRanking(contestId)
        .then((res) => {
          setData(res.data);
          setPaginatedData(_(res.data).slice(0).take(pageSize).value());
          setIsLoading(false);
        })
        .catch((error) => {});
    }
  }, []);
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {!paginatedData ? (
            "No User in LeaderBoard"
          ) : (
            <div className="contest_dashboard text-gray-900 ">
              <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <div className="DashBoard mb-4">
                  <h1 className="text-xl text-cyan-500 font-semibold">
                    Leader Board
                  </h1>
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
                        {paginatedData.map((participant, index) => (
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
                    <nav aria-label="Page navigation ">
                      <ul class="inline-flex space-x-2">
                        {pages.map((page) => (
                          <li>
                            <button
                              class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100"
                              onClick={() => pagination(page)}
                            >
                              {page}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
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

export default connect(mapStateToProps)(LeaderBoard);
