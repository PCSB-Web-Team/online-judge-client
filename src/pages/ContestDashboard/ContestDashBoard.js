import React, { useEffect, useState } from "react";
import DashboardTable from "../../components/DashboardTable";
import { Requests } from "../../utils/Index";
import { connect } from "react-redux";
import { getQuestions } from "../../utils/Requests";

function ContestDashboard() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    console.log("object");
    Requests.getQuestions().then(res => {
      console.log(res);
      setQuestion(res.data);
    })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="DashBoard">
          <br />
          <br />
          <h1 className="text-xl font-semibold">Problem Statement</h1>
        </div>
        <div className="mt-6">
          {
            question.map((question) => {
              return <DashboardTable id={question._id} title={question.title} description={question.description} />
            })
          }
        </div>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
function mapActionToProps(dispatch) {
  return {
    getQuestions: (userData) => dispatch(getQuestions(userData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(ContestDashboard);
