import React from "react"
import Table from "../../components/Table"
import { useNavigate } from "react-router-dom";

const getData = () =>
{
  const data = [
    {
      name: "Problem 1",
      title: "lorem ipsum",
      status: "Solved",
      max_score: "15",
      score: 0,
    },
    {
      name: "Problem 2",
      title: "lorem ipsum",
      status: "Unsolved",
      max_score: "20",
      score: 0,
    },
    {
      name: "Problem 3",
      title: "lorem ipsum",
      status: "Solved",
      max_score: "10",
      score: 0,
    },
    {
      name: "Problem 4",
      title: "lorem ipsum",
      status: "Solved",
      max_score: "10",
      score: 0,
    },
    {
      name: "Problem 5",
      title: "lorem ipsum",
      status: "Unsolved",
      max_score: "20",
      score: 0,
    },
    {
      name: "Problem 6",
      title: "lorem ipsum",
      status: "Unsolved",
      max_score: "20",
      score: 0,
    },
  ]
  return [...data]
}


function DashBoard()
{
  let navigate = useNavigate();
  function handleClick()
  {

    navigate("/problem")
  }
  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Title",
      accessor: "title",
    },

    {
      Header: "Score",
      accessor: "score",
    },
    {
      Header: "Max Score",
      accessor: "max_score",

    },
    {
      Header: "Solve",
      accessor: "status",
      Cell: () => (
        <button className="btn_1 btn-primary" onClick={handleClick} > Solve </button>
      ),
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="DashBoard"><br /><br />
          <h1 className="text-xl font-semibold">Problem Statement</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default DashBoard;