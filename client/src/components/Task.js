import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({ task }) {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes color="red" /></h3>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
