import React from 'react'
import { Link } from 'react-router-dom'
function Foot({lists}) {
    return (
    <li className="footlink">
        <Link to="#">{lists} </Link>
    </li>
    );
}

export default Foot;