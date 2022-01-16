import React, { useEffect, useState } from 'react'
import caret from '../assets/user.png'
import { useNavigate, useParams } from 'react-router';
import { Requests } from "../../src/utils/Index";

const Card = (props) =>
{
    const contestId = useParams();
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    useEffect(() =>
    {
        const token = localStorage.getItem("pcsb-oj-token")
        if (token)
        {
            setLoading(false)
            Requests.getUserByToken(token).then((res) =>
            {
                props.log(res.data)

            }).catch(error => { navigate("/contest") })
        }
        else
        {
            navigate("/contest")
        }
        // eslint-disable-next-line
        setLoading(true)
    }, []);

    function handleClick(props)
    {

        navigate("/login")

    }
    return (
        <div className="card p-8 m-2 shadow">
            <img src={caret} alt="contest" className="h-32 sm:h-48 w-full object-cover" />
            <div className="m-4">
                <span className="font-bold">Contest {props.id}</span>
                <span className="block text-gray-500 text-sm">{props.description}</span><br />
                <input type="button" value="Enter Contest" onClick={handleClick} className='btn_1' />
            </div>
            <div className="badge">
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default Card
