import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTaskAction } from "../../redux/action/TasklistAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Tasklist(props) {
  const { tasks } = { ...props };
  let searchvalue = useSelector(
    (state) => state.counterreducer.handleSearchTaskValue
  );
  const dispatch = useDispatch();

  return (
    <div className="container">
      <table class="table  table-hover table-bordered table-responsive-sm table-responsive-md table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Task</th>
            <th scope="col">prority</th>
            <th className="pointer" scope="col">
              Action
            </th>
          </tr>
        </thead>
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
                <td>{item._id}</td>
                <td>{item.Title}</td>
                <td>{item.Prority}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>
                    <button className=" btn btn-success ">edit</button>
                  </Link>

                  <button
                    className=" btn btn-danger ml-2"
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
      </table>
    </div>
  );
}
