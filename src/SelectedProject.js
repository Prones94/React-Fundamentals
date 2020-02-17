import React from 'react'
import {Link, useParams} from 'react-router-dom'
import data from './data'

function SelectedProject({image, title, desc}) {
    const { index } = useParams()
    const place = data[index]

    return (
        <div className='project'>
        <img alt="" src={ image } width="600" height="400" />
        <h3>{ title }</h3>
        <p>{ desc }</p>
        <Link to='/'>Back to Home</Link>
        </div>
    )
}
export default SelectedProject