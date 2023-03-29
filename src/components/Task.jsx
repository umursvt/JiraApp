import React, { useState } from 'react';

function Task({ onCreate }) {
  const [text, setText] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (event) => {
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
    //sending props
    onCreate(text, desc);
    //Clear inputs
    setText('');
    setDesc('');
  };
  return (
    <div>
      <div>
        <h3>Lütfen Task Ekleyiniz!</h3>
        <form className=" task-form ">
          <label className=" task-label ">Başlık</label>
          <input
            value={text}
            onChange={handleChange}
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
  );
}

export default Task;
