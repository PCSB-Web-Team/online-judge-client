import React from 'react'
import caret from '../assets/user.png'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card p-8 m-2 shadow">
            <img src={caret} alt="contest" className="h-32 sm:h-48 w-full object-cover" />
            <div className="m-4">
                <span className="font-bold">{props.title}</span><br /><br />
                <Link to={`/${props.contestId}`} className='btn'>Enter Contest</Link>
            </div>
            <div className="badge"><br />
                <span>{props.date}</span>
            </div>
        </div>
    )
}

export default Card
