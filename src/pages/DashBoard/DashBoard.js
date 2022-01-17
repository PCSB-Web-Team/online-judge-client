import React from 'react'
import { connect } from "react-redux";
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import Card from '../../components/Card';
import { Requests } from '../../utils/Index';
import { contest } from '../../utils/Requests';

const Dashboard = (props) =>
{
  const navigate = useNavigate();
  return (

    <div onSubmit={async values =>
    {
      Requests.contest(values).then(res =>
      {
        props.contest(res.data.id);
        navigate(`/contest/`)
      })
    }
    }>
      <div className="container "><br /><br />
        <h1 class="font-bold pb-2 p-8 border-b border-gray-200">Contest</h1>
        <div class="mt-8 grid m-12 lg:grid-cols-3 gap-10">
          <Card id={1} description={"Contest 1"} date={"15 Jan 2022"} />
          <Card id={2} description={"Contest 2"} date={"16 Jan 2022"} />
          <Card id={3} description={"Contest 3"} date={"17 Jan 2022"} />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state)
{
  return {
    isAuthenticated: state.isAuthenticated
  }
}
function mapActionToProps(dispatch)
{
  return {
    contest: (userData) => dispatch(contest(userData))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Dashboard);