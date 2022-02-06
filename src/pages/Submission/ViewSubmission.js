import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
import copy from "../../../src/assets/copy.png";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ViewSubmission = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { submissionId } = useParams();

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
        <div className="problem">
          <>
            <div key={data} className="problem-main p-1">
              <h1 className="text-2xl text-cyan-500 py-3">{data.title}</h1>
              <div className="problem-head-info py-2 mb-4">
                <span>Time Required to Execute the Code : 1000ms per test</span>
                <span>Memory Used : {data.memory}MB</span>
              </div>
              <p className="py-2">{data.description}</p>
              {data.map((submissionDetails, index) => {
                return (
                  <div key={index}>
                    <h2>Input : {submissionDetails.stdin}</h2>
                    <h2>Output : {submissionDetails.stdout}</h2>
                  </div>
                );
              })}
              <p className="py-3">
                <strong>Explanation</strong>
              </p>
              <p className="py-2">
                In the first test case, you can choose, for example, a1=a2=a3=5.
                <br /> In the second test case, there is no array a, since,
                according to s1, a1 is equal to a2, but, according to s2, a2 is
                not equal to a1.
                <br /> In the third test case, you can, for example, choose
                array a=[20,20,4,50,50,50,20].
                <br /> In the fourth test case, you can, for example, choose
                a=[1,3,3,7].
              </p>
            </div>
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

export default connect(mapStateToProps)(ViewSubmission);
