import React from 'react'
import { useParams } from 'react-router'
import Card from '../../components/Card';

const Dashboard = ({ data1 }) =>
{
    const { id } = useParams();

    return (
        <div>
            <div className="container "><br /><br />
                <h1 class="font-bold pb-2 p-8 border-b border-gray-200">Contest</h1>
                <div class="mt-8 grid m-12 lg:grid-cols-3 gap-10">
                    <Card id={1} description={"Contest 1"} date={"15 Jan 2022"} data={data1} />
                    <Card id={2} description={"Contest 2"} date={"16 Jan 2022"} data={data1} />
                    <Card id={3} description={"Contest 3"} date={"17 Jan 2022"} data={data1} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
