import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { Requests } from "../../utils/Index";
import copy from "../../../src/assets/copy.png";
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
        <div className="problem">
          <>
            <div key={data} className="problem-main p-1">
              <h1 className="text-3xl text-cyan-500 py-3">{data.title}</h1>
              <div className="problem-head-info py-2 mb-4">
                <span>Maximum Score : {data.score} || </span>
                <span>Time Limit : {data.time.$numberDecimal} sec || </span>
                <span> Memory Limit : {data.memory}MB</span>
                <p>Difficulty Level: {data.difficultyLevel} </p>
              </div>
              <p>
                <h2 className="text-cyan-500 text-xl">
                  Problem Statement :
                </h2>
                {data.problemStatement}
              </p>
              <p className="py-2">
                <h2 className="text-cyan-500 text-xl">Description :</h2>
                {data.description}
              </p>
              <h2 className="text-cyan-500 text-xl">Example</h2>
              {data.example.map((example) => {
                return (
                  <div>
                    <h2>Input : {example.input}</h2>
                    <h2>Output : {example.output}</h2>
                  </div>
                );
              })}
              <p>
                <h2 className="text-cyan-500 text-xl">Input Format :</h2>
                {data.inputFormat}
              </p>
              <p>
                <h2 className="text-cyan-500 text-xl">Output Format :</h2>
                {data.outputFormat}
              </p>
              <p>
                <h2 className="text-cyan-500 text-xl">Constraints :</h2>
                {data.constraints}
              </p>
              <p className="text-cyan-500 text-xl py-3">
                <strong>Input</strong>
              </p>
              <p className="sample-tests">
                <div className="copied">Copied!</div>
                <img
                  src={copy}
                  alt="copy"
                  title="Copy to Clipboard"
                  onClick={() => copytoclipboard(0)}
                />
                <code>
                  {data.samples.map((samples) => {
                    return <div>{samples.sampleInput}</div>;
                  })}
                </code>
              </p>
              <p className="text-cyan-500 text-xl py-3">
                <strong>Output</strong>
              </p>
              <p className="sample-tests">
                <div className="copied">Copied!</div>
                <img
                  src={copy}
                  alt="copy"
                  title="Copy to Clipboard"
                  onClick={() => copytoclipboard(1)}
                />
                <code>
                  {data.samples.map((samples) => {
                    return <div>{samples.sampleOutput}</div>;
                  })}
                </code>
              </p>
              <p className="text-cyan-500 text-xl py-3">
                <strong>Explanation</strong>
              </p>
              <p className="py-2">
                {data.explanations.map((explain) => {
                  return <div className="py-3"> {explain.testcaseExplain} </div>
                })}
              </p>
            </div>
            <Editor />
          </>
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
