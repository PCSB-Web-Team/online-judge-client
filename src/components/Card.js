import React from 'react'
import caret from '../assets/user.png'
import { Link } from 'react-router-dom';
import { login } from '../store/actions';
import { connect } from "react-redux";

const Card = (props) => {
    return (
        <div className="card p-8 m-2 shadow">
            <img src={caret} alt="contest" className="h-32 sm:h-48 w-full object-cover" />
            <div className="m-4">
                <span className="font-bold">{props.title}</span><br /><br />
                {props.isAuthenticated ? null :
                    <Link to={`/login`} className='btn'>Enter Contest</Link>
                }
                {props.isAuthenticated ? (
                    <Link to={`/${props.contestId}`} className='btn'>Enter Contest</Link>
                ) : null}
            </div>
            <div className="badge"><br />
                <span>{props.date}</span>
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
        login: () => dispatch(login()),
    }
}

export default connect(mapStateToProps, mapActionToProps)(Card);

