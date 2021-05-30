import React from "react";
import Layout from "./Layout";
import TaskEdit from "../tasks/TaskEdit";
export default function TaskEditPage(props) {
  return (
    <Layout>
      <TaskEdit props={props}></TaskEdit>
    </Layout>
  );
}
