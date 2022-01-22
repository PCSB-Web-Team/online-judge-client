import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import Card from '../../components/Card';
import { Requests } from '../../utils/Index';
import { getContests } from '../../utils/Requests';

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Requests.getContests().then(res => {
      setData(res.data);
    }).catch((error) => { })
  }, [])
  return (

    <div>
      <div className="container "><br /><br />
        <h1 class="font-bold pb-2 p-8 border-b border-gray-200">Contest</h1>
        <div class="mt-8 grid m-12 lg:grid-cols-3 gap-10">
        {
          data.map((contest) => {
            return <Card contestId={contest._id} title={contest.title} date={contest.startsOn.split("T")[0]} />
          })
        }
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
function mapActionToProps(dispatch) {
  return {
    getContests: (userData) => dispatch(getContests(userData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);
