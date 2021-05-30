import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function TextHit() {
  const [num, setnum] = useState(0);

  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Num"
        onChange={(e) => setnum(e.target.value)}
        value={num}
      ></input>

      <button
        className="btn btn-success"
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        +
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        -
      </button>

      <button
        className="btn-info"
        onClick={() => {
          dispatch({ type: "UPDATE_VAL", payload: num });
        }}
      >
        Update
      </button>
    </div>
  );
}
