export const ADD_TASK = "ADD_TASK";
let id =0;
export const addTask=(row)=>{
    return{
        type:ADD_TASK,
        payload:{
            id:++id,
            content:row
        }
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
export const clearTask=(id,filterState)=>{
    return{
        type:CLEAR_TASK,
        payload:{
            id,
            filterState
        }
      
    }
}