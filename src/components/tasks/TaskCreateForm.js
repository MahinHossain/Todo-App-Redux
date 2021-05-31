import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StoreTaskDAtaAction,
  handlechngeInputForm,
} from "../../redux/action/TasklistAction";

export default function TaskCreateForm(props) {
  const dispatch = useDispatch();

  const TaskFromInpute = useSelector((state) => state.counterreducer.taskForm);

  const handlechngeInput = (name, value) => {
    dispatch(handlechngeInputForm(name, value));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    dispatch(StoreTaskDAtaAction(TaskFromInpute));
  };
  return (
    <div className="mt-5">
      <form className="" onSubmit={(e) => submitForm(e)}>
        <div class="form-group">
          <input
            class="form-control"
            placeholder="Title"
            value={TaskFromInpute.Title}
            onChange={(e) => handlechngeInput("Title", e.target.value)}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            class="form-control"
            value={TaskFromInpute.Priority}
            onChange={(e) => handlechngeInput("Prority", e.target.value)}
          >
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Average">Average</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success float-left">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
