import React, { useEffect, useState } from 'react'
import caret from '../assets/user.png'
import { useNavigate, useParams } from 'react-router';
import { Requests } from "../../src/utils/Index";

const Card = (props) =>
{

    return (
        <div className="card p-8 m-2 shadow">
            <img src={caret} alt="contest" className="h-32 sm:h-48 w-full object-cover" />
            <div className="m-4">
                <span className="font-bold">Contest {props.id}</span>
                <span className="block text-gray-500 text-sm">{props.description}</span><br />
                <input type="button" value="Enter Contest" type="submit" className='btn_1' />
            </div>
            <div className="badge">
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default Card
