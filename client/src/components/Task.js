import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes color="red" onClick={ () => onDelete(task.id) }/></h3>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
