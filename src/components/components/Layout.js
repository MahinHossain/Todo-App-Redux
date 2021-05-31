import React from "react";
import Headers from "./Header";
import Footer from "./Footer";
export default function Layout(props) {
  return (
    <div>
      {props.children}
      <div className="mt-5">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
