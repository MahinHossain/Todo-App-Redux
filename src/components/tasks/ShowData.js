import React from "react";

export default function ShowData(props) {
  const { adress, contact } = { props };
  const { name, email } = { adress };
  const { phone, message } = { contact };

  return (
    <div>
      <h1 className="text-center container">show Data</h1>
      <h3>data=={(name, email, phone, message)}</h3>
    </div>
  );
}
