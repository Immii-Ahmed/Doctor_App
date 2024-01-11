import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({ path, text }) => {

    return (
        <li className="nav-item">
            <NavLink className="nav-link active" style={{
                fontWeight: 'bold',
                backdropFilter: 'opacity(1)',
                backdropFilter: 'opacity(1)',
                width: 'max-content'
            }} to={path}>
                {text}
            </NavLink>
        </li>
    )
}

export default Links
