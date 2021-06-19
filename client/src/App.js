import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [state,] = useState([
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

  return (
    <div className="App">
      <Header />
      <Tasks tasks={state}/>
    </div>
  );
}

export default App;
