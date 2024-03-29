import React, { useEffect, useState } from "react";
import { Requests } from "../../api/Index";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ViewSubmission = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { submissionId } = useParams();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    setIsLoading(true);
    Requests.submissionById(submissionId)
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
        <div className="problem max-w-6xl mx-auto ">
          <div className="flex-inline">
            <h2 className="text-3xl text-gray-400 font-bold">
              {data.submission.questionName}
            </h2>
            <div className="text-2xl text-cyan-500 mb-4">
              Status: {data.submission.status}
            </div>
          </div>
          <div className="flex">
            <div>Your Score : {data.submission.score}</div>
            <div className="px-8">Max Score : {data.submission.maxScore}</div>
          </div>
          <div className="flex">
            <div>Test Cases Passed: {data.submission.passedCases}</div>
            <div className="px-4">
              Max Test Cases: {data.submission.maxCases}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-4">
            {data.executions.map((example, i) => {
              return (
                <div className="max-w-[400px] min-w-[300px]" key={i}>
                  <div className="bg-black shadow-cyan-500 rounded-md overflow-hidden relative shadow-md">
                    <div className="p-4 bg-gradient-to-r from-slate-800 via-gray-800 to-gray-900">
                      <h2 className="text-2xl text-gray-300">
                        Test Case:{i + 1}
                      </h2>
                      <div className="flex justify-between mt-4 mb-4 text-gray-500">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {example.time ? (
                            <div className="ml-1 lg:text-xl">
                              {example.time.$numberDecimal} sec
                            </div>
                          ) : (
                            <div className="ml-1 lg:text-xl">0 sec</div>
                          )}
                        </div>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path
                              fill-rule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          {example.time ? (
                            <div className="ml-1 lg:text-xl">
                              {example.memory} kb
                            </div>
                          ) : (
                            <div className="ml-1 lg:text-xl">0 kb</div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4 text-gray-500">
                        <div>Expected Output:</div>
                        <div className="p-1 bg-slate-800">
                          {example.expected_output}
                        </div>
                        <div>Your Output:</div>
                        <div className="p-1 bg-slate-800">{example.stdout}</div>
                        {example?.compile_output && (
                          <>
                            <div>Compiled Output:</div>
                            <div className="p-1 bg-slate-700">
                              {example.compile_output}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {example.status.description == "Accepted" ? (
                      <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-600  text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                        {example.status.description}
                      </div>
                    ) : (
                      <div className="absolute top-0 right-0 mt-4 mr-4 bg-red-600  text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                        {example.status.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

export default connect(mapStateToProps)(ViewSubmission);
