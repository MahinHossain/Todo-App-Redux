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

  //Replaces componentDidMount and componentWillUnmount
  // useEffect(() => {
  //   var timerID = setInterval(() => tick(), 1000);

  //   return function cleanup() {
  //     clearInterval(timerID);
  //   };
  // });

  // function tick() {
  //   setDate(new Date());
  // }

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
    <nav className="container navbar bg-dark  rounded navbar-expand-lg col-sm-6 col-md-12 ">
      <a class="navbar-brand text-danger" href="#">
        My Todo
      </a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./">Home</Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./detail">Task List</Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./getapi">Form Test</Link>
            </a>
          </li>

          <li class="nav-item active">
            <a class="nav-link" href="#">
              <Link to="./aboutus">About Us</Link>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <h5>
                Total task{" "}
                <span class="badge badge-danger">{taskss.length}</span>
              </h5>
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
