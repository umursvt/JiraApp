import React, { useState } from 'react';
import Task from './Task';

function TaskShow({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id);
  };
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate(!update);
  };
  return (
    <div className=" task-show ">
      {update ? (
        <>
          <Task task={task} taskFormUpdate={true} />
        </>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.text}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p> {task.desc} </p>
          <div>
            <button className=" task-delete " onClick={handleDelete}>
              Sil
            </button>
            <button className="task-update" onClick={handleUpdate}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
