import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "./components/components/Layout";
import Tasklist from "./components/tasks/Tasklist";
import TaskCreateForm from "./components/tasks/TaskCreateForm";
import CounterComponent from "./counter/CounterComponent";
import { GetApiDataAction } from "./redux/action/TasklistAction";
export default function TaskListPage(props) {
  const isloading = useSelector((state) => state.counterreducer.Is_Loading);

  const [newUserFormInputShow, setnewUserFormInputShow] = useState(false);
  const dispatch = useDispatch();
  let taskss = useSelector((state) => state.counterreducer.tasks);
  useEffect(() => {
    dispatch(GetApiDataAction());
  }, []);
  return (
    <div>
      <Layout>
        <CounterComponent />
        <br></br>

        {newUserFormInputShow ? (
          <div>
            <h3> New User</h3>

            <div>
              <TaskCreateForm />
            </div>

            <br />
            <br />
          </div>
        ) : (
          <div></div>
        )}

        <div className="container">
          <div className="float-left ml-5">
            <h3 className="mt-2 bor mb-2 border bg-aqua border-primary text-primary">
              My Task
            </h3>
          </div>

          <div className="float-right mr-5">
            {newUserFormInputShow ? (
              <div>
                {" "}
                <button
                  className="btn btn-danger mt-2 mb-2"
                  onClick={() =>
                    setnewUserFormInputShow(newUserFormInputShow ? false : true)
                  }
                >
                  Cancel Task
                </button>
              </div>
            ) : (
              <div>
                <button
                  className=" btn btn-success mt-2 mb-2"
                  onClick={() =>
                    setnewUserFormInputShow(newUserFormInputShow ? false : true)
                  }
                >
                  Create Task
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="container mt-5">
          {isloading ? (
            <div className="mt-5 p-5">
              {" "}
              <h4 className="text-danger  ">Loading.......</h4>
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-danger" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <Tasklist tasks={taskss} />
          )}
        </div>
      </Layout>
    </div>
  );
}
