import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { Requests } from "../../api/Index";
import copy from "../../../src/static/Assets/copy.png";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Problem = () => {
  const [data, setData] = useState({ example: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { questionId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    Requests.getQuestionById(questionId)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  const copytoclipboard = (i) => {
    const tests = document.querySelectorAll(".sample-tests");
    tests[i].querySelector(".copied").style.display = "block";
    navigator.clipboard.writeText(tests[i].querySelector("code").textContent);
    setTimeout(() => {
      tests[i].querySelector(".copied").style.display = "none";
    }, 1000);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap overflow-auto sm:overflow-hidden">
            <div className="bg-blue w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  sm:h-[120vh] overflow-auto">
              <div className="p-4 pb-4 sm:pb-16 bg-black/20">
                <div>
                  <div key={data} className=" p-1">
                    <h1 className="text-3xl text-cyan-500 py-3 border-b mb-2 border-gray-400">
                      {data.title}
                    </h1>
                    <div className="problem-head-info py-1 mb-4">
                      <span>Maximum Score : {data.score} || </span>
                      <span>
                        Time Limit : {data.time.$numberDecimal} sec ||{" "}
                      </span>
                      <span> Memory Limit : {data.memory}MB</span>
                      <div>Difficulty Level: {data.difficultyLevel} </div>
                    </div>
                    <div>
                      <h2 className="text-cyan-500 text-xl py-2">
                        Problem Statement :
                      </h2>
                      {data?.problemStatement?.map((statement) => {
                        return <p>{statement}</p>;
                      })}
                    </div>
                    {data?.description && (
                      <div className="py-2">
                        <h2 className="text-cyan-500 text-xl">Description :</h2>
                        {data?.description}
                      </div>
                    )}
                    <h2 className="text-cyan-500 text-xl py-2">Example</h2>
                    {data.example.map((example, i) => {
                      return (
                        <div className="py-1" key={i}>
                          <h2 cla>Input : </h2>
                          <div className="bg-blue-800/20 p-1">
                            {example?.input?.split("\n")?.map((inp) => (
                              <p>{inp}</p>
                            ))}
                          </div>
                          <h2>Output : </h2>
                          <div className="bg-green-800/20 p-1">
                            {example?.output?.split("\n")?.map((out) => (
                              <p>{out}</p>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    <>
                      <h2 className="text-cyan-500 text-xl py-2">
                        Input Format :
                      </h2>
                      {data?.inputFormat &&
                        data?.inputFormat?.map((format) => <p>{format}</p>)}
                    </>
                    <>
                      <h2 className="text-cyan-500 text-xl py-2">
                        Output Format :
                      </h2>
                      {data.outputFormat}
                    </>
                    <>
                      <h2 className="text-cyan-500 text-xl py-2">
                        Constraints :
                      </h2>
                      {data.constraints}
                    </>
                    <div className="text-cyan-500 text-xl py-3">
                      <strong>Input</strong>
                    </div>
                    <div className="sample-tests bg-gray-900">
                      <div className="copied">Copied!</div>
                      <img
                        src={copy}
                        alt="copy"
                        title="Copy to Clipboard"
                        onClick={() => copytoclipboard(0)}
                      />
                      <code>
                        {data.samples.map((samples, i) => {
                          return (
                            <div key={i}>
                              <pre>{samples.sampleInput}</pre>
                            </div>
                          );
                        })}
                      </code>
                    </div>
                    <p className="text-cyan-500 text-xl py-3">
                      <strong>Output</strong>
                    </p>
                    <div className="sample-tests bg-gray-900 shadow-cyan-500">
                      <div className="copied">Copied!</div>
                      <img
                        src={copy}
                        alt="copy"
                        title="Copy to Clipboard"
                        onClick={() => copytoclipboard(1)}
                      />
                      <code>
                        {data.samples.map((samples, i) => {
                          return (
                            <div key={i}>
                              <pre>{samples.sampleOutput}</pre>
                            </div>
                          );
                        })}
                      </code>
                    </div>
                    <p className="text-cyan-500 text-xl py-3">
                      <strong>Explanation</strong>
                    </p>
                    <div className="py-1">
                      {data.explanations.map((explain, i) => {
                        return (
                          <div className="py-3" key={i}>
                            {explain.testcaseExplain}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pink w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-full ">
              <div className="p-4 pb-4 sm:pb-16">
                <Editor />
              </div>
            </div>
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

export default connect(mapStateToProps)(Problem);
