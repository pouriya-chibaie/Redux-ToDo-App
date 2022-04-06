import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, clearTask, setTask, SET_TASK } from "../redux/action";

const Input = () => {
  const setValue = (value) => {
    dispatch(setTask(value))
  };
  const currentTask = useSelector((state) => state.currentTask);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
//   console.log(tasks);
// console.log("currentTask = ",currentTask);
// console.log("tasks = ",tasks);

const pushTo=()=>{
  const storedTask = [...tasks]
  storedTask.push(currentTask);
 dispatch(addTask(storedTask))
dispatch(clearTask())
}
// dispatch(addTask([...tasks,currentTask]))
console.log(tasks);
  return (
    <>
      <input value={currentTask}
        type="text"
        placeholder="enter your task"
        onChange={(e) => setValue(e.target.value)}
      />
      <h1> {currentTask} </h1>
      <button onClick={pushTo} >click to add</button>
      <div style={{background:"aqua",width:"100vw"}}>

     {
       tasks.map(function(item, i){
         console.log('test');
         return <p key={i}>{item}</p>
        })
      } 
    </div>
     
    </>
  );
};

export default Input;
