import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom'

function Project({image, title, link}) {
    return (
        <div className="Project">
            <img src={image} width ="300" height="200" />
            <h3>{title}</h3>
            <Link to={link}>Link to Project</Link>
        </div>
    )
}

export default Project