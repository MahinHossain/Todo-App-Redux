import { handlesearchValue } from "../action/TasklistAction";
import * as Types from "../types/Types";

const initializitState = {
  counter: 10,
  valu: "",

  tasks: [],

  taskForm: {
    _id: null,
    Title: "",
    Prority: "",
  },
  Is_Loading: null,
  handleSearchTaskValue: "",
};

function CounterReducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
      break;

    case Types.UPDATE_NEW_VAL:
      alert("successfull");
      return {
        ...state,

        taskForm: {
          Title: "",
          Prority: " ",
        },
      };
      break;
    case Types.GET_TASKS_Details:
      console.log(`action.payload,----`, action.payload);
      return {
        ...state,
        taskForm: action.payload,
      };
      break;

    case Types.CHANGE_TASK_INPUT:
      const taskForm = { ...state.taskForm };

      taskForm[action.payload.name] = action.payload.value;
      console.log(`taskForm`, taskForm);
      return {
        ...state,
        taskForm,
      };
      break;

    case Types.HANDLE_SEARCH_TASK_INPUT:
      return {
        ...state,
        handleSearchTaskValue: action.payload,
      };
      break;

    case Types.Is_Loading:
      console.log(`object action.payload,`, action.payload);
      return {
        ...state,
        Is_Loading: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default CounterReducer;
