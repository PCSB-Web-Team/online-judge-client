import React, { useEffect, useState } from "react";
import { Requests } from "../../utils/Index";
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
          <div className="flex-inline">
          <h2 className="text-2xl text-cyan-500">
            {data.submission.questionName}
          </h2>
          <div className="text-2xl text-cyan-500 mb-4">Status: {data.submission.status}</div>
          </div>
          <div className="flex">
          <div>Your Score: {data.submission.score}</div>
          <div className="px-8">Max Score: {data.submission.maxScore}</div>
          </div>
          <div className="flex">
          <div>Cases Passed: {data.submission.passedCases}</div>
          <div className="px-4">Max Cases: {data.submission.maxCases}</div>
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
