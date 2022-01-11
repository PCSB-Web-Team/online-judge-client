import React from 'react'
import Table from '../../components/Table'

const getData = () =>
{
  const data = [
    {
      name: 'Name 1',
      status: 'Submitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0,
    },
    {
      name: 'Name 2',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 3',
      status: 'Submitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 4',
      status: 'Submitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 5',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
    {
      name: 'Name 6',
      status: 'NotSubmitted',
      maxscore: '100',
      score: 0,
      score1: 0,
      score2: 0,
      score3: 0, score4: 0, score5: 0
    },
  ]
  return [...data]
}

function LeaderBoard()
{

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',

    },

    {
      Header: "Problem 1",
      accessor: 'score1',
    },
    {
      Header: "Problem 2",
      accessor: 'score2',
    },
    {
      Header: "Problem 3",
      accessor: 'score3',
    },
    {
      Header: "Problem 4",
      accessor: 'score4',
    },
    {
      Header: "Problem 5",
      accessor: 'score5',
    },
    {
      Header: "Total Score",
      accessor: 'score',
    },
    {
      Header: "Max Score",
      accessor: 'maxscore',

    },
    {
      Header: "Status",
      accessor: 'status',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])
  console.log("object");
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="LeadershipBoard"><br /><br />
          <h1 className="text-xl font-semibold">Leadership Board</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}


export default LeaderBoard;

