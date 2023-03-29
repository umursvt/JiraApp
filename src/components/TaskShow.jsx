import React from 'react';

function TaskShow({ task }) {
  return (
    <div className=" task-show ">
      <h3 className="task-title">Göreviniz</h3>
      <p>{task.text}</p>
      <h3 className="task-title">Yapılacaklar</h3>
      <p> {task.desc} </p>
      <div>
        <button className=" task-delete ">Sil</button>
        <button className=" task-update ">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
