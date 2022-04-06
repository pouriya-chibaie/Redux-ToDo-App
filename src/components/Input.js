import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  clearTask,
  CLEAR_TASK,
  setTask,
  SET_TASK,
} from "../redux/action";

const Input = () => {
  const setValue = (value) => {
    dispatch(setTask(value));
  };
  const currentTask = useSelector((state) => state.currentTask);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const pushTo = () => {
 
    dispatch(addTask(currentTask));
    dispatch(setTask(""))
  };
  const deleteTask = (id) => {
    const task = [...tasks];
    const filteredTask = task.filter((p) => p.id !== id);
    dispatch({ type: CLEAR_TASK, payload: filteredTask });
    console.log(filteredTask);
  };
  console.log(currentTask);
  return (
    <>
      <input
        value={currentTask}
        type="text"
        placeholder="enter your task"
        onChange={(e) => setValue(e.target.value)}
      />
      <h1> {currentTask} </h1>
      <button onClick={pushTo}>click to add</button>
      <div style={{ background: "aqua", width: "100vw" }}>
        {tasks.map(function (item, i) {
          console.log("test");
          return (
            <div key={i}>
              <p>{item.content}</p>{" "}
              <button onClick={() => deleteTask(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Input;
