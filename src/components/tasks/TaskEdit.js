import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  handlechngeInputForm,
  GetApiDataActionDetails,
  UpdateTaskDAtaAction,
} from "../../redux/action/TasklistAction";

export default function TaskEdit(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [prority, setProtrity] = useState("");
  const param = useParams();
  console.log(`param`, param);
  const { id } = param;

  const TaskFromInpute = useSelector((state) => state.counterreducer.taskForm);

  const handlechngeInput = (name, value) => {
    dispatch(handlechngeInputForm(name, value));
  };

  useEffect(() => {
    dispatch(GetApiDataActionDetails(id));
  }, []);
  const UpdateTask = async (e) => {
    e.preventDefault();

    dispatch(UpdateTaskDAtaAction(TaskFromInpute, id));
  };
  return (
    <div className="mt-4">
      <form className="container" onSubmit={(e) => UpdateTask(e)}>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Title"
            value={TaskFromInpute.Title}
            onChange={(e) => handlechngeInput("Title", e.target.value)}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            class="form-control"
            value={TaskFromInpute.Priority}
            onChange={(e) => handlechngeInput("Prority", e.target.value)}
          >
            <option value="">select priority</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Average">Average</option>
          </select>
        </div>

        <button type="submit" className=" btn btn-success float-left">
          {" "}
          Update Data
        </button>
      </form>
    </div>
  );
}
