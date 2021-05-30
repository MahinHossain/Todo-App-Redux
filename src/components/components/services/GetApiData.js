import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "../AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Form, Container } from "react-bootstrap";
import ShowData from "../../tasks/ShowData";

export default function GetApiData() {
  const [state, setstate] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    arr: [],
  });
  const [search, Setsearch] = useState("");
  const handleOnchange = (value, name) => {
    let clonestate = { ...state };
    clonestate[name] = value;

    setstate(clonestate);
  };

  const submitForm = (e) => {
    e.preventDefault();

    let clonestate = { ...state };

    let obj = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      subject: state.subject,
      message: state.message,
    };

    clonestate.arr.push(obj);

    setstate(clonestate);
    console.log(`state`, state);
  };

  //search\
  const searchItem = (val) => {
    Setsearch(val);
    console.log(`search`, search);
  };
  //date clock\\
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <Container>
      <Form className="p-5 mt-4" onSubmit={(e) => submitForm(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Youe Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={state.name}
            onChange={(e) => handleOnchange(e.target.value, "name")}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            // value=""
            name="email"
            value={state.email}
            onChange={(e) => handleOnchange(e.target.value, "email")}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Subject </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Subject"
            name="subject"
            value={state.subject}
            onChange={(e) => handleOnchange(e.target.value, "subject")}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone </Form.Label>
          <Form.Control
            placeholder="Enter Phone"
            name="phone"
            value={state.phone}
            onChange={(e) => handleOnchange(e.target.value, "phone")}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Message </Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter Message"
            value={state.message}
            name="message"
            onChange={(e) => handleOnchange(e.target.value, "message")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Form.Label>Message </Form.Label>
      <Form.Control
        className="col-6 float-right"
        placeholder="Enter search"
        value={search}
        name="search"
        onChange={(e) => searchItem(e.target.value)}
      />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Name</th>
            <th> Email</th>
            <th>Phone</th>
            <th>subject</th>
          </tr>
        </thead>
        {state.arr
          .filter((filterItem) => {
            if (search.length > 0) {
              return filterItem.name
                .toLowerCase()
                .includes(search.toLowerCase());
            } else {
              return searchItem;
            }
          })
          .map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.subject}</td>
            </tr>
          ))}
        <tbody></tbody>
      </Table>
    </Container>
  );
}
