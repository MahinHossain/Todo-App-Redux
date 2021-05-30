import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CounterComponent() {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1 className="text-danger"> {counter}</h1>
    </div>
  );
}
