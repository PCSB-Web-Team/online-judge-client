import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'  // new

const getData = () => {
  const data = [
    {
      name: 'Problem 1',
      title: 'lorem ipsum',
      department: 'Optimization',
      status: 'Solved',
      role: '15',
      age: 0,
    },
    {
      name: 'Problem 2',      
      title: 'lorem ipsum',
      department: 'Intranet',
      status: 'Unsolved',
      role: '20',
      age: 0,
    },
    {
      name: 'Problem 3',      
      title: 'lorem ipsum',
      department: 'Directives',
      status: 'Solved',
      role: '10',
      age: 0,
      },
    {
      name: 'Problem 4',
      title: 'lorem ipsum',
      department: 'Program',
      status: 'Solved',
      role: '10',
      age: 0,
    },
    {
      name: 'Problem 5',     
      title: 'lorem ipsum',
      department: 'Intranet',
      status: 'Unsolved',
      role: '20',
      age: 0,
    },
    {
      name: 'Problem 6',     
      title: 'lorem ipsum',
      department: 'Intranet',
      status: 'Unsolved',
      role: '20',
      age: 0,
    },
  ]
  return [...data]
}

function DashBoardPage() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    
    {
      Header: "Score",
      accessor: 'age',
    },
    {
      Header: "Max Score",
      accessor: 'role',
      
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill,
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="dashboardpage"><br/><br/>
          <h1 className="text-xl font-semibold">Problem Statement</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default DashBoardPage;
