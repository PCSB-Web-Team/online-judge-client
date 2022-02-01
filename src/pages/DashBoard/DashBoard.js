import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card";
import { Requests } from "../../utils/Index";
import { getContests } from "../../utils/Requests";
import Loader from "../../components/Loader/Loader";
import { Routes, Route } from "react-router-dom";

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
          <>
            <div className="container mx-auto">
              <h1 className="font-bold pb-2 p-5 border-b">Contest</h1>
              <div className=" grid p-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {data.map((contest) => {
                  return (
                    <Card
                      contestId={contest.id}
                      title={contest.title}
                      date={contest.startsOn.split("T")[0]}
                      {...contest}
                    />
                  );
                })}
              </div>
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

export default connect(mapStateToProps)(Dashboard);
