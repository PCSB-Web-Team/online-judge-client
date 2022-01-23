import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { Requests } from "../../utils/Index";
import copy from "../../../src/assets/copy.png";
import { connect } from "react-redux";
import { getSpecificQuestions } from "../../utils/Requests";
import { useParams, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader"

const Problem = () => {
  const [data, setData] = useState({ example: [] });
  const [isLoading, setIsLoading] = useState(true);
  const { questionId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Requests.getSpecificQuestions(questionId).then(res => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error) => { })
  }, [])

  const copytoclipboard = (i) => {
    const tests = document.querySelectorAll(".sample-tests");
    tests[i].querySelector('.copied').style.display = 'block';
    navigator.clipboard.writeText(tests[i].querySelector("code").textContent);
    setTimeout(() => {
      tests[i].querySelector('.copied').style.display = 'none';
    }, 1000);
  };

  return (
    <div>
      {isLoading ? (
        <div><Loader /></div>
      ) : (
        <div className="problem">
          <><div key={data} className="problem-main">
            <h1>A. {data.title}</h1>
            <div className="problem-head-info">
              <span>Time Limit : 1000ms per test</span>
              <span>Memory Limit : {data.memory}MB</span><br />
            </div>
            <p>
              {data.description}
            </p>
            {data.example.map((example) => {
              return (
                <div>
                  <h2>Input : {example.input}</h2>
                  <h2>Output : {example.output}</h2>
                </div>
              )
            })}
            <h2>Example</h2>
            <p>
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
              {data.example.map((example) => {
              return (
                <div>
                  {example.input}
                </div>
              )
            })}
              </code>
            </p>
            <p>
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
              {data.example.map((example) => {
              return (
                <div>
                  {example.output}
                </div>
              )
            })}
              </code>
            </p>
            <p>
              <strong>Explanation</strong>
            </p>
            <p>
              In the first test case, you can choose, for example, a1=a2=a3=5.
              <br /> In the second test case, there is no array a, since, according
              to s1, a1 is equal to a2, but, according to s2, a2 is not equal to a1.
              <br /> In the third test case, you can, for example, choose array
              a=[20,20,4,50,50,50,20].
              <br /> In the fourth test case, you can, for example, choose
              a=[1,3,3,7].
            </p>
          </div>
            <Editor />
          </>
          <Outlet />
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
function mapActionToProps(dispatch) {
  return {
    getSpecificQuestions: (userData) => dispatch(getSpecificQuestions(userData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Problem);
