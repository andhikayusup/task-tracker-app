import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

function App() {
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

  return (
    <div className="App">
      <Header />
      <AddTask />
      {
        tasks.length === 0 ? 'No tasks to show' : <Tasks tasks={ tasks } onDelete={deleteTask} onToggle={toggleReminder}/>
      }
      
    </div>
  );
}

export default App;
