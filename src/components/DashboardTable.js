import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTable = (props) => {


    return (
        <div>
            <div className="mt-4 flex flex-col">
                <Link to={`/contest/${props.id}/${props.title}`} className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    <div className="flex items-center justify-between">
                                        {props.id}
                                    </div>
                                </th>
                                <th scope="col"
                                    className="group px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                    <div className="flex items-center justify-between">
                                        {/* {props.id} */}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody
                            className="bg-white divide-y divide-gray-200" >
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap" role="cell">
                                    {props.title} <br />Max Score : 10
                                    <div className="text-sm text-gray-500"></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap" role="cell">
                                    <Link to={`/contest/${props.id}/${props.title}`} className='btn left-space'>Solve</Link>
                                    <div className="text-sm text-gray-500"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div>
                                <button className="btn_2 btn-primary" onClick={() => previousPage()}>Previous</button>
                                <button className="btn_2 btn-primary" onClick={() => nextPage()}>Next</button>
                    </div> */}
                </Link>
            </div>
        </div>
    );
};

export default DashboardTable;
