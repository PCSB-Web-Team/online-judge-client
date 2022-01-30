import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { Requests } from "../../utils/Index";
import { getContests } from "../../utils/Requests";
import Loader from "../../components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import ContestDashboard from "../ContestDashboard/ContestDashBoard";
import NotFound from "../../components/NotFound";
import Problem from "../EditorPage/Problem";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Requests.getContests()
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {isloading ? (
        <div>
          <Loader></Loader>
        </div>
      ) : (
        <div className="bg-gray-50">
          <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div className="container">
                        <h1 className="font-bold pb-2 p-8 border-b">Contest</h1>
                        <div className="mt-8 grid m-12 lg:grid-cols-3 gap-16">
                          {data.map((contest) => {
                            return (
                              <Card
                                contestId={contest.id}
                                title={contest.title}
                                date={contest.startsOn.split("T")[0]}
                              />
                            );
                          })}
                        </div>
                        <div className="p-40"></div>
                      </div>
                    </>
                  }
                />
                <Route path="/contest/:contestId" element={<ContestDashboard />} />
                {/* <Route path="/:contestId/:questionId" element={<Problem />} /> */}
                <Route element={<NotFound />} />
          </Routes>
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
function mapActionToProps(dispatch) {
  return {
    getContests: (userData) => dispatch(getContests(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);
