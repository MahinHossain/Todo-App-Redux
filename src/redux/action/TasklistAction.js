import axios from "axios";
import * as Types from "../types/Types";

export const GetApiDataAction = () => async (dispatch) => {
  let data = [];
  let isLoading = true;
  await axios.get("http://todo-app37.herokuapp.com/loadtodo").then((res) => {
    data = res.data;
    isLoading = false;
    data.sort();
    data.reverse();
    dispatch({ type: Types.GET_TASKS, payload: data });
    dispatch({ type: Types.Is_Loading, payload: isLoading });
  });
};
export const GetApiDataActionDetails = (id) => async (dispatch) => {
  let data = [];

  await axios
    .get(`http://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then((res) => {
      data = res.data;

      dispatch({ type: Types.GET_TASKS_Details, payload: data });
    });
};

export const StoreTaskDAtaAction = (newUser) => async (dispatch) => {
  if (newUser.Title.length == 0) {
    alert("Enter Title");
    return false;
  }

  if (newUser.Prority.length == 0) {
    alert("Enter Title");
    return false;
  }

  await axios
    .post("http://todo-app37.herokuapp.com/addTodo", newUser)
    .then((res) => {
      dispatch({ type: Types.UPDATE_NEW_VAL, payload: newUser });
      dispatch(GetApiDataAction());
    });
};
export const UpdateTaskDAtaAction = (newUser, id) => (dispatch) => {
  if (newUser.Title.length == 0) {
    alert("Enter Title");
    return false;
  }

  if (newUser.Prority.length == 0) {
    alert("Enter Title");
    return false;
  }

  axios
    .patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, newUser)
    .then((res) => {
      // dispatch({ type: Types.UPDATE_NEW_VAL, payload: newUser });
      //dispatch(GetApiDataAction());

      if (res.data.ok == 1) {
        alert("Task Updated");
      } else {
        alert("failed");
      }
    });
};

export const deleteTaskAction = (id, name) => (dispatch) => {
  axios
    .delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
    .then((res) => {
      if (res.data.ok == 1) {
        dispatch(GetApiDataAction());
        alert(`${name}  deleted`);
      } else {
        alert(`${name}  Not Deletted`);
      }
    });
};
export const handlechngeInputForm = (name, value) => async (dispatch) => {
  const taskform = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_TASK_INPUT, payload: taskform });
};
export const handlesearchValue = (value) => (dispatch) => {
  dispatch({ type: Types.HANDLE_SEARCH_TASK_INPUT, payload: value });
};
