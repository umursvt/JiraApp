import React, { useState } from 'react';

function Task({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [text, setText] = useState(task ? task.text : '');
  const [desc, setDesc] = useState(task ? task.desc : '');

  const handleText = (event) => {
    //gets the input
    setText(event.target.value);
  };
  const handleDesc = (event) => {
    //gets the input
    setDesc(event.target.value);
  };

  const handleForm = (event) => {
    //no-refresh
    event.preventDefault();
    if (text === '' || desc === '') {
      alert('Boşlukları doldurun!');
      return;
    }

    //sending props
    onCreate(text, desc);

    //Clear inputs
    setText('');
    setDesc('');
  };
  const handleEdit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, text, desc);
    } else {
      onCreate(text, desc);
    }
  };
  return (
    <div>
      {taskFormUpdate ? (
        <>
          <div className=" task-form-update ">
            <h3>Lütfen Task Düzenleyiniz!</h3>
            <form className=" task-form ">
              <label className=" task-label ">Başlığı Düzenleyiniz</label>
              <input
                value={text}
                onChange={handleText}
                className=" task-input "
              />
              <label className=" task-label ">Taskı Düzenleyiniz!</label>
              <textarea
                value={desc}
                onChange={handleDesc}
                className=" task-input "
                rows={5}
              ></textarea>
              <button onClick={handleEdit} className=" task-button ">
                Düzenle
              </button>
            </form>
          </div>
        </>
      ) : (
        <div>
          <div>
            <h3>Lütfen Task Ekleyiniz!</h3>
            <form className=" task-form ">
              <label className=" task-label ">Başlık</label>
              <input
                value={text}
                onChange={handleText}
                className=" task-input "
              />
              <label className=" task-label ">Task Giriniz!</label>
              <textarea
                value={desc}
                onChange={handleDesc}
                className=" task-input "
                rows={5}
              ></textarea>
              <button onClick={handleForm} className=" task-button ">
                Oluştur
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
