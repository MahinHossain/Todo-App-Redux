import React, { useState } from "react";
import ShowData from "./ShowData";

export default function Form() {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
    division: "",
    gender: "",

    list: [],
  });
  const [editStatus, seteditStatus] = useState(false);

  //dataREceive
  const dataReceive = (value, name) => {
    let stateData = { ...state };
    stateData[name] = value;

    setState(stateData);
  };

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let listClone = { ...state };

    let objc = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      designation: state.designation,
      password: state.password,
      division: state.division,
      gender: state.gender,
    };
    //check already user exit or not

    for (let i = 0; i < state.list.length; i++) {
      const obj = state.list[i];

      if (obj.email === state.email) {
        alert("already exist");
        return false;
      }
    }

    listClone.list.push(objc);
    setState(listClone);
  };

  //stste to Edit field for update
  const handleForEdit = (data, index) => {
    seteditStatus(true);

    let listClone = { ...state };

    listClone.name = data.name;
    listClone.email = data.email;
    listClone.designation = data.designation;
    listClone.phone = data.phone;
    listClone.division = data.division;
    listClone.gender = data.gender;
    listClone.id = index;

    setState(listClone);
  };

  // update Value from  Text Field to state

  const handleEditUpdate = (e) => {
    e.preventDefault();

    const stateClone = { ...state };

    for (let i = 0; i < stateClone.list.length; i++) {
      if (i == state.id) {
        const element = stateClone.list[i];
        element.name = state.name;
        element.phone = state.phone;
        element.email = state.email;
        element.designation = state.designation;
        element.division = state.division;
        element.gender = state.gender;
      }
    }
    setState(stateClone);

    alert("data Updated Successfully");
  };

  //delete
  const handleDelete = (index) => {
    const cloneSt = { ...state };
    cloneSt.list.splice(index, 1);
    setState(cloneSt);
  };
  //cancel update button

  const handleCancel = (e) => {
    seteditStatus(false);
    const stateClone = { ...state };
    stateClone.name = "";
    stateClone.email = "";
    stateClone.phone = "";
    stateClone.division = "";
    stateClone.designation = "";
    stateClone.gender = "";
    stateClone.password = "";

    setState(stateClone);
  };
  return (
    <div className="container mt-5 form-group">
      <div className="col-md-6">
        <form
          className=""
          onSubmit={(e) => {
            editStatus ? handleEditUpdate(e) : handleSubmit(e);
          }}
        >
          {/*  name*/}

          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label col-form-label-sm">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="name"
                class="form-control form-control-sm"
                name="name  "
                placeholder="Name"
                onChange={(e) => dataReceive(e.target.value, "name")}
                value={state.name}
                required
              />
            </div>
          </div>

          {/* email */}

          <div class="form-group row">
            <label
              for="email"
              class="col-sm-2 col-form-label col-form-label-sm"
            >
              Email
            </label>
            <div class="col-sm-10">
              <input
                required
                type="email"
                class="form-control form-control-sm"
                name="email  "
                placeholder="Email"
                onChange={(e) => dataReceive(e.target.value, "email")}
                value={state.email}
              />
            </div>
          </div>

          {/* phone */}

          <div class="form-group row">
            <label
              for="phone"
              class="col-sm-2 col-form-label col-form-label-sm"
            >
              Phone
            </label>
            <div class="col-sm-10">
              <input
                required
                type="text"
                class="form-control form-control-sm"
                name="phone  "
                placeholder="phone"
                onChange={(e) => dataReceive(e.target.value, "phone")}
                value={state.phone}
              />
            </div>
          </div>

          {/* Designation */}

          <div class="form-group row">
            <label
              for="designation"
              class="col-sm-2 col-form-label col-form-label-sm"
            >
              Designation
            </label>
            <div class="col-sm-10">
              <input
                required
                type="designation"
                class="form-control form-control-sm"
                name="designation  "
                placeholder="Designation"
                onChange={(e) => dataReceive(e.target.value, "designation")}
                value={state.designation}
              />
            </div>
          </div>

          {/* select menu */}

          <div className="form-group row">
            <label
              for="division"
              class="col-sm-2 col-form-label col-form-label-sm"
            >
              Division
            </label>
            <select
              required
              class="col-sm-9 form-control form-control-sm "
              onChange={(e) => dataReceive(e.target.value, "division")}
              name="division"
              value={state.division}
            >
              <option value="">Your Division</option>
              <option value="Dhaka">Dhaka</option>

              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Chittagong">Chittagong</option>
            </select>
          </div>
          {/*  Gender radio Button*/}

          <div className="d-flex">
            <h6 className="mr-3">Gender</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                onChange={(e) => dataReceive(e.target.value, "gender")}
                value="male"
                checked={state.gender == "male"}
                required
              />
              <label class="form-check-label mr-2" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                checked={state.gender == "female"}
                onChange={(e) => dataReceive(e.target.value, "gender")}
                value="female"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>

          {/* Password */}

          <div class="form-group row">
            <label
              for="password"
              class="col-sm-2 col-form-label col-form-label-sm"
            >
              Password
            </label>
            <div class="col-sm-10">
              <input
                required
                type="password"
                class="form-control form-control-sm"
                name="password  "
                placeholder="Password"
                onChange={(e) => dataReceive(e.target.value, "password")}
                value={state.password}
              />
            </div>
          </div>

          {editStatus ? (
            <>
              <button type="submit" className="btn btn-primary">
                update
              </button>
              <button
                className="btn btn-danger ml-5"
                onClick={(e) => {
                  handleCancel(e);
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </form>
      </div>

      {/* DataPasssing */}

      {state.list == 0 ? (
        <h4 className=" card bg-danger text-white mt-4">No data here</h4>
      ) : (
        <table class="table table-striped      mt-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Designation</th>
              <th scope="col">Division</th>
              <th scope="col">Gender</th>
              <th scope="col">Update</th>
              <th scope="col ">Delete</th>
            </tr>
          </thead>

          {state.list.map((data, index) => (
            <tr>
              <ShowData
                id={index}
                data={data}
                handleForEdit={() => handleForEdit(data, index)}
                handleDelete={() => handleDelete(index)}
              />
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
