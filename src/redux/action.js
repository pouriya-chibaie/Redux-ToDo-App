export const ADD_TASK = "ADD_TASK";
export const addTask=(val)=>{
    return{
        type:ADD_TASK,
        payload:val
    }
}
export const REMOVE_TASK="REMOVE_TASK";
export const removeTask=()=>{
    return{
        type:REMOVE_TASK
    }
}
export const SET_TASK="SET_TASK";
export const setTask=(task)=>{
    return{
        type:SET_TASK,
        payload:task
    }
}
export const CLEAR_TASK="CLEAR_TASK"
export const clearTask=()=>{
    return{
        type:CLEAR_TASK,
      
    }
}