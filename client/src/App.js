import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Belajar React',
      day: '19 Juni 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Belajar Redux',
      day: '19 Juni 2021',
      reminder: true
    },
    {
      id: 3,
      text: 'Belajar Axios',
      day: '19 Juni 2021',
      reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header onToggle={() => {setShowAddTask(!showAddTask)}} showAdd={showAddTask}/>
      {
        showAddTask && <AddTask onAdd={addTask}/>
      }
      {
        tasks.length === 0 ? 'No tasks to show' : <Tasks tasks={ tasks } onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask}/>
      }
    </div>
  );
}

export default App;
