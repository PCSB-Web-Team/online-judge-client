import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { Requests } from "../../utils/Index";
import copy from "../../../src/assets/copy.png";
import { connect } from "react-redux";
import { getContests, getQuestions } from "../../utils/Requests";
import { Link, useParams, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const Problem = () =>
{
  const [data, setData] = useState([]);
  const { contestId } = useParams();

  useEffect(() => {
    console.log("object");
    Requests.getQuestions().then(res => {
      console.log(res);
      setData(res.data);
      getContests(contestId);
    }).catch((error) => { })
  }, [])
  const copytoclipboard = (i) =>
  {
    const tests = document.querySelectorAll(".sample-tests");
    tests[i].querySelector('.copied').style.display = 'block';
    navigator.clipboard.writeText(tests[i].querySelector("code").textContent);
    setTimeout(() =>
    {
      tests[i].querySelector('.copied').style.display = 'none';
    }, 1000);
  };

  return (
    <div className="problem">
      <div className="problem-main"><br></br>
        <h1>A. Problem 1</h1>
        <div className="problem-head-info">
          <span>Time Limit : 1000ms per test</span>
          <span>Memory Limit : 256MB per test</span>
          <span>Standard Input</span>
          <span>Standard Output</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          molestiae earum repellendus laborum fugiat cupiditate sapiente nihil,
          quod molestias asperiores, rem dolorem animi iste excepturi blanditiis
          quisquam ad, cumque velit!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quasi molestiae earum repellendus laborum fugiat
          cupiditate sapiente nihil, quod molestias asperiores, rem dolorem
          animi iste excepturi blanditiis quisquam ad, cumque velit!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          molestiae earum repellendus laborum fugiat cupiditate sapiente nihil,
          quod molestias asperiores, rem dolorem animi iste excepturi blanditiis
          quisquam ad, cumque velit!
        </p>
        <h2>Input</h2>
        <p>
          The first line contains a single integer t (1≤t≤1000) — the number of
          test cases. Next t cases follow. The first and only line of each test
          case contains a non-empty string s consisting of characters E and/or
          N. The length of s is equal to the size of array n and 2≤n≤50. For
          each i from 1 to n: if si= E then ai is equal to ai+1 (an=a1 for i=n);
          if si= N then a<sub>i</sub> is not equal to a<sub>i+1</sub> (a
          <sub>n</sub>≠a
          <sub>1</sub> for i=n).
        </p>
        <h2>Output</h2>
        <p>
          For each test case, print YES if it's possible to choose array a that
          are consistent with information from s you know. Otherwise, print NO.
          It can be proved, that if there exists some array a, then there exists
          an array a of positive integers with values less or equal to 10
          <sup>9</sup>.
        </p>
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
            4<br /> EEE
            <br /> EN
            <br /> ENNEENE
            <br /> NENN
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
            YES <br />
            NO
            <br /> YES
            <br /> YES
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
      <Outlet />
    </div>
  );
};

Problem.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Problem);
