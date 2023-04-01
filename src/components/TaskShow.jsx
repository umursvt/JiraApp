import React, { useState } from 'react';
import Task from './Task';

function TaskShow({ task, onDelete, onUpdate }) {
  const handleDelete = () => {
    onDelete(task.id);
  };
  const [edit, setEdit] = useState(false);

  const handleUpdate = () => {
    setEdit(!edit);
  };
  const handleSubmit = (id, UpdatedText, updatedDesc) => {
    setEdit(false);
    onUpdate(id, UpdatedText, updatedDesc);
  };
  return (
    <div className=" task-show ">
      {edit ? (
        <>
          <Task task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
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
