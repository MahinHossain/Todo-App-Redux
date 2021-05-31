import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TaskListPage from "./TaskEditPage";

import { handlesearchValue } from "../../redux/action/TasklistAction";
export default function Header() {
  let taskss = useSelector((state) => state.counterreducer.tasks);

  //for clock
  const [date, setDate] = useState(new Date());
  const [searchValue, setsearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, [searchValue]);

  const handlechngeInput = (e) => {
    dispatch(handlesearchValue(e.target.value));
    console.log(`target`, e.target.value);
  };

  return (
    <nav className="container navbar bg-dark  rounded navbar-expand-lg col-sm-6 col-md-12">
      <h5 class="navbar-brand text-light mb-3" href="#">
        My Todo
      </h5>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./">
                <p className="text-light">Home</p>
              </Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./detail">
                {" "}
                <p className="text-light">Task List</p>
              </Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./getapi">
                {" "}
                <p className="text-light">Form </p>
              </Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./aboutus">
                {" "}
                <p className="text-light">About us</p>
              </Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">
              <a className="text-light">
                Total task{" "}
                <span class="badge badge-danger">{taskss.length}</span>
              </a>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search name"
            aria-label="Search"
            onChange={(e) => handlechngeInput(e)}
          />

          <button class="btn btn-dark my-2 my-sm-0">
            {date.toLocaleTimeString()}
          </button>
        </form>
      </div>
    </nav>
  );
}
