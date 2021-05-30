import React from "react";
import { useSelector } from "react-redux";
export default function TaskDetails() {
  let taskss = useSelector((state) => state.counterreducer.tasks);
  return (
    <div>
      <h1>
        Task TaskDetails <span class="badge badge-danger">{taskss.length}</span>
      </h1>
    </div>
  );
}
