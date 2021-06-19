import Task from "./Task"

function Tasks({ tasks, onDelete, onToggle }) {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
                ))
            }
        </>
    )
}

export default Tasks
