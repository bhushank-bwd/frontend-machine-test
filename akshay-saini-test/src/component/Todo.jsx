import React, { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    if (inputText.trim() !== "") {
      const tempItem = {
        id: `${todoList.length + 1}-${Date.now()}`,
        text: inputText.trim(),
        checked: false,
      };
      setTodoList((prev) => [...prev, tempItem]);
      setInputText("");
    }
  };
  const toggleChecked = (id) => {
    setTodoList((prev) => {
      const tempItemList = prev.map((item) => {
        if (item.id == id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return tempItemList;
    });
  };
  const removeItem = (id) => {
    setTodoList((prev) => {
      console.log(id);
      const tempItemList = prev.filter((item) => item.id != id);
      return tempItemList;
    });
  };
  return (
    <div className="todo">
      <h1>ToDo</h1>
      <input
        className="input"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <button className="add-todo" onClick={addItem}>
        Add
      </button>
      <div className="list">
        {todoList.map((obj) => {
          return (
            <div className="list-item" key={obj.id}>
              <input
                type="checkbox"
                checked={obj.checked}
                onChange={() => {
                  toggleChecked(obj.id);
                }}
              ></input>
              <span className={`${obj.checked && "line-through"}`}>
                {obj.text}
              </span>
              <button
                onClick={() => {
                  removeItem(obj.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
