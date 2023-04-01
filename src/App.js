import { useEffect, useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskList from './components/TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  //the props coming from Task
  const createTask = async (text, desc) => {
    //axios
    const responce = await axios.post('http://localhost:3001/tasks', {
      text: text,
      desc: desc,
    });
    console.log(responce);

    //to add new task and saves the already exist
    const createdTask = [...tasks, responce.data];
    setTasks(createdTask);
  };

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
    console.log(response);
  };

  // for everytime rendering
  useEffect(() => {
    fetchData();
  }, []);
  // deleting the item by id
  const deleteTaskByID = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterDeletingTask = tasks.filter((element) => {
      return element.id !== id;
    });
    setTasks(afterDeletingTask);
    fetchData();
  };
  const editTaskById = async (id, updatedText, updatedDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      text: updatedText,
      desc: updatedDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, text: updatedText, desc: updatedDesc };
      }
      return tasks;
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <Task onCreate={createTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskByID}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
