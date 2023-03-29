import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  //the props coming from Task
  const createTask = (text, desc) => {
    //to add new task and saves the already exist
    const createdTask = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        text,
        desc,
      },
    ];
    setTasks(createdTask);
  };
  // deleting the item by id
  const deleteTaskByID = (id) => {
    const afterDeletingTask = tasks.filter((element) => {
      return element.id !== id;
    });
    setTasks(afterDeletingTask);
  };
  return (
    <div className="App">
      <Task onCreate={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTaskByID} />
    </div>
  );
}

export default App;
