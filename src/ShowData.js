import React, { useState } from "react";

export default function ShowData(props) {
  const {  name, email, phone, designation, division, gender } = props.data;

  return (
    <>
      <td>{props.id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{designation}</td>
      <td>{division}</td>
      <td>{gender}</td>
      <td>
        <button
          className="bg-info"
          onClick={() => props.handleForEdit(props.data)}
        >
          Edit
        </button>
      </td>
      <td>
        <button className="bg-danger" onClick={() => props.handleDelete()}>
          delete
        </button>
      </td>
    </>
  );
}