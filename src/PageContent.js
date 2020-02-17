import React from 'react'
import Project from './Project.js'
import './PageContent.css'
import data from './data'

function PageContent() {
    return (
        <div className="PageContent">
        <div className="projects">
            {
                // place is the element in the array
                // i is the index of the element
                data.map(({title, image}, i) => { // Data takes a function as a parameter
                    return( // Returns a component
                        <Project
                            key = { `${i}-${ image }` }
                            title = { title }
                            image = {image}
                            link = {`${i}`}
                        />
                    )
                })
            }
        </div>
            
        </div>
    )
}

export default PageContent
