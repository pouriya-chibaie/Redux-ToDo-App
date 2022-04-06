import { ADD_TASK, SET_TASK, CLEAR_TASK } from "./action";
const initialData = {
  tasks: [],
};
export const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [

        
          ...state.tasks,
         {
             id: action.payload.id,
             content: action.payload.content,
            } 
        ]
      };
    
    case SET_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
      break;

    case CLEAR_TASK:
        return {
            ...state,tasks:action.payload
        }
      break;

    default:
      return state;
  }
};
