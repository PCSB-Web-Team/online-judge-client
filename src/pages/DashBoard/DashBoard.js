import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { Requests } from "../../utils/Index";
import { getContests } from "../../utils/Requests";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <div className=" text-6xl text-white">
          <Loader />
        </div>
      ) : (
        <div className="container">
          <h1 className="font-bold pb-2 p-8 border-b">
            Contest
          </h1>
          <div className="mt-8 grid m-12 lg:grid-cols-3 gap-16">
            {data.map((contest) => {
              return (
                <Card
                  contestId={contest._id}
                  title={contest.title}
                  date={contest.startsOn.split("T")[0]}
                />
              );
            })}
          </div>
          <div className="p-40"></div>
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
