import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTaskAction } from "../../redux/action/TasklistAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Tasklist(props) {
  const isloading = useSelector((state) => state.counterreducer.Is_Loading);

  const { tasks } = { ...props };
  let searchvalue = useSelector(
    (state) => state.counterreducer.handleSearchTaskValue
  );
  const dispatch = useDispatch();
  return (
    <div className="">
      <table class="table  table-hover table-bordered  table-striped">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Task</th>
            <th scope="col">Prority</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>

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
          <tbody>
            {tasks
              .filter((filterItem) => {
                if (searchvalue.trim().length > 0) {
                  return filterItem.Title.toLowerCase().includes(
                    searchvalue.toLowerCase().trim()
                  );
                } else {
                  return filterItem;
                }
              })
              .map((item, index) => (
                <tr key={index}>
                  {/* <td>{item._id}</td> */}
                  <td>{item.Title}</td>
                  <td>{item.Prority}</td>
                  <td className=" text-center p-1">
                    <Link to={`/edit/${item._id}`}>
                      <button className="btn btn-success mr-5">edit</button>
                    </Link>
                    <button
                      className="btn btn-danger  mr-auto"
                      onClick={() =>
                        dispatch(deleteTaskAction(item._id, item.Title))
                      }
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
