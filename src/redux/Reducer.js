import{ADD_TASK,REMOVE_TASK,SET_TASK,CLEAR_TASK} from "./action"
const initialData={
    tasks :[],
currentTask:"",

}
export const  reducer=(state=initialData,action)=>{
    switch (action.type) {
        case ADD_TASK:   
        return {...state,tasks:action.payload}
        case REMOVE_TASK:
            return state
            case SET_TASK:
                return{...state,currentTask:action.payload}
                break;
           
            case CLEAR_TASK:
                return{...state,currentTask:""}
                break;
           
        default:
            return state
    }
}